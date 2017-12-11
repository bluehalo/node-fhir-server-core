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
 * @param {Array<String>} validScopes
 * @returns {Boolean}
 */
function _hasCorrectScope(decodedTokenOrIntrospection, validScopes) {
    const tokenScope = decodedTokenOrIntrospection.scope;
    const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(' ') : [];
    const intersection = _.intersection(scopeArray, validScopes);

    logger.debug(`Required scopes for resource ${validScopes}`);
    logger.debug(`Scope found on request ${scopeArray}`);

    return intersection.length > 0;
}

/**
 * Returns the appropriate key to verify the JWT.
 *
 * @param {Object} decodedToken
 * @returns {String}
 */
function _getKeyForTokenValidation(decodedToken) {
		const authConfig = config.authConfig;

		// Check for a private key first
    if (authConfig.secretKey) {
				return authConfig.secretKey;
		// Then check if there is a key in the jwkSet.
    } else if (_.get(authConfig, 'jwkSet.keys', []).length === 1) {
        const jwtKey = authConfig.jwkSet.keys[0];
				return jwkToPem(jwtKey);
		// If there is more than one key, check the key identifier.
    } else if (_.get(authConfig, 'jwkSet.keys', []).length > 1) {
        const jwtKey = _.find(authConfig.jwkSet.keys, ['kid', decodedToken.header.kid]);
        return jwkToPem(jwtKey);
    } else {
        return null;
    }
}

/**
 * Parse the `token` from the given `req`'s authorization header.
 *
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
 * Verify the JWT token and validate its scopes.
 *
 * @param {String} token
 * @param {String} secretOrPublicKey
 * @param {Object} options
 * @param {Array<String>} validScopes
 * @param {Function} next
 * @returns {Promise} Returns a promise that resolves to the result of the `next`.
 */
async function _verifyToken(token, secretOrPublicKey, options = {}, validScopes, next) {
    const issuer = config.authConfig.issuer;
    const clientId = config.authConfig.clientId;
    const allOptions = Object.assign(options, { audience: clientId, issuer: issuer });

		// verify the token and signature with secret/pub key
		let decoded;
    try {
				decoded = jwt.verify(token, secretOrPublicKey, allOptions);
		} catch (err) {
        // log error return 401 with error message;
        logger.error(err, err.message);
        return next(errors.custom(401, 'invalid_token'));
		}

		logger.debug('Token has been verified. Searching for scope ...');

		if (typeof decoded.scope === 'string' && _hasCorrectScope(decoded, validScopes)) {
				return next();
		} else if (config.authConfig.introspection_endpoint) {
				logger.debug('Attempting to introspect token');

				const protectedResourceClientId = config.authConfig.protectedResourceClientId;
				const protectedResourceClientSecret = config.authConfig.protectedResourceClientSecret;

				try {
						const introspectionResponse = await request
								.post(config.authConfig.introspection_endpoint)
								.auth(protectedResourceClientId, protectedResourceClientSecret)
								.send(`token=${token}`);
						const introspection = introspectionResponse.body;

						logger.debug('Successfully introspected token');
						if (!introspection.active) {
								logger.error('Access token is not active');
								return next(errors.custom(401, 'invalid_token'));
						} else if (!_hasCorrectScope(introspection, validScopes)) {
								logger.error('Access token has insufficient scope');
								return next(errors.custom(403, 'insufficient_scope'));
						} else {
								logger.info('Access token and scope have been verified');
								return next();
						}
				} catch (error) {
					logger.error(`Failed to introspect token ${error}`);
					return next(errors.custom(403, 'insufficient_scope'));
				}
		} else {
				logger.error('The scope of the token is insufficient or the token cannot be introspected');
				return next(errors.custom(403, 'insufficient_scope'));
		}
}

/**
 * @name validate
 * @summary {Function} Returns a middleware function that verifies bearer token and checks scope
 * @param {Array<String>} validScopes A list of scopes that allow access to the resource.
 */
module.exports.validate = (validScopes) => {
    return async (req, res, next) => {
        // get bearer token
        const bearerToken = _parseBearerToken(req);

        if (bearerToken) {
            logger.debug('Found bearer token in request');
            const decodedToken = jwt.decode(bearerToken, {complete: true});
            logger.debug('Decoded bearer token from request');
            const tokenKey = _getKeyForTokenValidation(decodedToken);
            return await _verifyToken(bearerToken, tokenKey, {}, validScopes, next);
        } else {
            // did not pass checks, return 401 message
            logger.error('Could not find bearer token in request headers');
            return next(errors.unauthorized());
        }
    };
};
