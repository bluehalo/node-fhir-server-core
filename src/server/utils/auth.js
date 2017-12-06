const path = require('path');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const jwkToPem = require('jwk-to-pem')
const errors = require(path.resolve('./src/server/utils/error.utils'));
const config = require(path.resolve('./src/config/config'));
const logger = require(path.resolve('./src/lib/winston'));

/**
 * 
 */
function _checkForScopes(decodedTokenOrIntrospection, requiredScopes, next) {
    const tokenScope = decodedTokenOrIntrospection.scope;
    const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(' ') : [];
    logger.info(`Token Scopes: ${scopeArray}`);
    logger.info(`Require at least one scope for route: ${requiredScopes}`);
    const intersection = _.intersection(scopeArray, requiredScopes);
    if (intersection.length > 0) {
        logger.info(`Access token has one of the required scopes: ${intersection[0]}`);
        next();
    } else {
        logger.info('Access token does not have one of the required scopes');
        next(errors.unauthorized());
    }
}

// TODO: If there is more than one key and read from file.
function _getKeyForTokenValidation(decodedToken, authConfig) {
    if (authConfig.secretKey) {
        return authConfig.secretKey;
    } else if (_.get(authConfig, 'jwkSet.keys', []).length === 1) {
        const jwt = authConfig.jwkSet.keys[0];
        return jwkToPem(jwt)
    } else {
        return null;
    }
}

/**
 * Parse the `token` from the given
 * `req`'s authorization header.
 *
 * @api public
 * @param {Request} req
 * @return {String|null}
 */
function _parseBearerToken(req) {

    let auth;
    if (!req.headers || !(auth = req.headers.authorization)) {
      return null;
    }

    // split on space
    const parts = auth.split(' ');
    if (parts.length < 2) {
        return;
    }

    // get schema and token from array
    const schema = parts.shift().toLowerCase();
    const token = parts.join(' ');

    // validate that it is a bearer
    if (schema !== 'bearer') {
        return null;
    }

    return token;
}

/**
 * Verify the JWT token
 *
 * @param {*} token
 * @param {*} secretOrPublicKey
 * @param {*} next
 */
function _verifyToken(token, secretOrPublicKey, options = {}, requiredScopes, next) {
    const issuer = config.authConfig.issuer;
    const clientId = config.authConfig.clientId;
    const allOptions = Object.assign(options, { audience: clientId, issuer: issuer });

    // verify the token and signature with secret/pub key
    jwt.verify(token, secretOrPublicKey, allOptions, function(err, decoded) {
        if (err) {
            // log error return 401 with error message;
            logger.error(err, err.message);
            return next(errors.custom(401, 'Unauthorized request: ' + err.message));
        }

        logger.info('Token has been verified. Checking Scopes.');
        // token should be valid at this point
        // TODO get scopes/permissions

        if (decoded.scope) {
            _checkForScopes(decoded, requiredScopes, next);            
        } else if (config.authConfig.introspection_endpoint) {
            logger.info(`Attempting to introspect token ${token}`);
            
            const protectedResourceClientId = config.authConfig.protectedResourceClientId;
            const protectedResourceClientSecret = config.authConfig.protectedResourceClientSecret;            

            request
                .post(config.authConfig.introspection_endpoint)
                .auth(protectedResourceClientId, protectedResourceClientSecret)
                .send(`token=${token}`)
            .then((response) => {
                const introspection = response.body;

                logger.info(`Result from Introspection: ${JSON.stringify(introspection)}`);
                _checkForScopes(introspection, requiredScopes, next);
            }, (err) => {
                logger.error(`Failed to instrospect token ${err}`);
                next(errors.unauthorized());                
            })
        } else {
            next(errors.unauthorized());            
        }
    });
}

/**
 * @name Validate
 * @summary Validates the bearer token in the headers.
 */
module.exports.validate = (requiredScopes) => { return(req, res, next) => {
    // get bearer token
    const bearerToken = _parseBearerToken(req);

    if (bearerToken) {
        const decodedToken = jwt.decode(bearerToken, {complete: true});
        const tokenKey = _getKeyForTokenValidation(decodedToken, config.authConfig) 
        _verifyToken(bearerToken, tokenKey, {}, requiredScopes, next);
    } else {
        // did not pass checks, return 401 message
        next(errors.unauthorized());
    }
}};