const path = require('path');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const jwkToPem = require('jwk-to-pem');
const errors = require(path.resolve('./src/server/utils/error.utils'));
const config = require(path.resolve('./src/config/config'));
const logger = require(path.resolve('./src/lib/winston'));

/**
 * Check the decoded token or instrospection for at least one required scope.
 *
 * @param {Object} decodedTokenOrIntrospection
 * @param {Array<String>} requiredScopes
 * @param {*} next
 */
function _checkForScopes(decodedTokenOrIntrospection, requiredScopes, next) {
    const tokenScope = decodedTokenOrIntrospection.scope;
    const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(' ') : [];
    const intersection = _.intersection(scopeArray, requiredScopes);

    logger.debug(`Required scopes for resource ${requiredScopes}`);
    logger.debug(`Scope found on request ${scopeArray}`);

    if (intersection.length > 0) {
        logger.info('Access token and scope have been verified');
        next();
    } else {
        logger.error('Access token lacks one of the proper scopes');
        next(errors.unauthorized());
    }
}

/**
 * Returns the appropriate key to verify the JWT.
 *
 * @param {Object} decodedToken
 * @param {Object} authConfig
 */
function _getKeyForTokenValidation(decodedToken, authConfig) {
    if (authConfig.secretKey) {
        return authConfig.secretKey;
    } else if (_.get(authConfig, 'jwkSet.keys', []).length === 1) {
        const jwtKey = authConfig.jwkSet.keys[0];
        return jwkToPem(jwtKey);
    } else if (_.get(authConfig, 'jwkSet.keys', []).length > 1) {
        const jwtKey = _.find(authConfig.jwkSet.keys, ['kid', decodedToken.header.kid]);
        return jwkToPem(jwtKey);
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
        return null;
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
 * @param {String} token
 * @param {String} secretOrPublicKey
 * @param {Object} options
 * @param {Array<String>} requiredScopes
 * @param {*} next
 */
function _verifyToken(token, secretOrPublicKey, options = {}, requiredScopes, next) {
    const issuer = config.authConfig.issuer;
    const clientId = config.authConfig.clientId;
    const allOptions = Object.assign(options, { audience: clientId, issuer: issuer });
    logger.debug(`JWT verify options: ${JSON.stringify(allOptions)}`);

    // verify the token and signature with secret/pub key
    jwt.verify(token, secretOrPublicKey, allOptions, function(err, decoded) {
        if (err) {
            // log error return 401 with error message;
            logger.error(err, err.message);
            return next(errors.custom(401, 'Unauthorized request: ' + err.message));
        }

        logger.debug('Token has been verified. Searching for scope ...');

        if (typeof decoded.scope === 'string') {
            logger.debug('Scope was found in decoded token');
            _checkForScopes(decoded, requiredScopes, next);
        } else if (config.authConfig.introspection_endpoint) {
            logger.debug('Attempting to introspect token');

            const protectedResourceClientId = config.authConfig.protectedResourceClientId;
            const protectedResourceClientSecret = config.authConfig.protectedResourceClientSecret;

            request
                .post(config.authConfig.introspection_endpoint)
                .auth(protectedResourceClientId, protectedResourceClientSecret)
                .send(`token=${token}`)
            .then((response) => {
                const introspection = response.body;
                logger.debug(`Successfully introspected token: ${JSON.stringify(introspection)}`);
                _checkForScopes(introspection, requiredScopes, next);
            }, (error) => {
                logger.error(`Failed to instrospect token ${error}`);
                next(errors.unauthorized());
            });
        } else {
            logger.error(`Could not find scope or introspect token ${JSON.stringify(decoded)}`);
            next(errors.unauthorized());
        }
    });
}

/**
 * @name Validate
 * @summary Returns a middleware function to verify a token and validate scopes.
 * @param {Array<String>} requiredScopes - Scopes that each individually allow access to the resource.
 */
module.exports.validate = (requiredScopes) => {
    return (req, res, next) => {
        // get bearer token
        const bearerToken = _parseBearerToken(req);

        if (bearerToken) {
            logger.debug(`Found bearer token in request: ${bearerToken}`);
            const decodedToken = jwt.decode(bearerToken, {complete: true});
            logger.debug(`Decoded bearer token in request: ${JSON.stringify(decodedToken)}`);
            const tokenKey = _getKeyForTokenValidation(decodedToken, config.authConfig);
            _verifyToken(bearerToken, tokenKey, {}, requiredScopes, next);
        } else {
            // did not pass checks, return 401 message
            logger.error('Could not find bearer token in request headers');
            next(errors.unauthorized());
        }
    };
};
