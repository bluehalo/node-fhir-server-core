const _ = require('lodash');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const jwkToPem = require('jwk-to-pem');
const errors = require('./error.utils');

// Injected in validation function.
let logger;

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
	logger.debug(`Validated Scopes: ${intersection}`);

	return intersection.length > 0;
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
 * @param {Object} oauthConfig
 * @param {Function} next
 * @returns {Promise} Returns a promise that resolves to the result of the `next`.
 */
async function _verifyToken(token, secretOrPublicKey, options = {}, validScopes, oauthConfig, next) {
	const issuer = oauthConfig.issuer;
	const clientId = oauthConfig.clientId;
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

	if (typeof decoded.scope === 'string') {
		return _hasCorrectScope(decoded, validScopes) ? next() : next(errors.custom(403, 'insufficient_scope'));
	} else if (oauthConfig.introspection_endpoint) {
		logger.debug('Attempting to introspect token');

		const protectedResourceClientId = oauthConfig.protectedResourceClientId;
		const protectedResourceClientSecret = oauthConfig.protectedResourceClientSecret;

		try {
			const introspectionResponse = await request
				.post(oauthConfig.introspection_endpoint)
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
 * @param {Array<String>} validScopes
 * @param {Object} loggerUtil
 * @param {Object} config
 */
module.exports.validate = (validScopes, loggerUtil, config) => {
	logger = logger || loggerUtil;
	return async (req, res, next) => {

		if (config.server && config.server.mode === 'public') {
			return next();
		} else {
			// get bearer token
			const bearerToken = _parseBearerToken(req);

			if (bearerToken) {
				logger.debug('Found bearer token in request');
				const decodedToken = jwt.decode(bearerToken, { complete: true });

				if (decodedToken && decodedToken.header && decodedToken.header.alg) {
					if (decodedToken.header.alg.startsWith('HS')) {
						logger.debug('HS Algorithm');
						// IF HS*** algorith, validate signature based on secret key
						_verifyToken(bearerToken, config.auth.secret, {}, validScopes, config.auth, next);

					} else if (decodedToken.header.alg.startsWith('RS')) {
						logger.debug('RHS Algorithm');

						// IF RS*** algorithm, validate signature based on certificate
						// Get public key (update this to point to the correct public key path)
						const jwtKey = _.find(config.jwkSet.keys, ['kid', decodedToken.header.kid]);
						const pem = jwkToPem(jwtKey);
						_verifyToken(bearerToken, pem, {algorithms: [decodedToken.header.alg]}, validScopes, config.auth, next);
					}
				} else {
					// invalid bearer token
					return next(errors.custom(401, 'invalid_token'));
				}
			} else {
				// did not pass checks, return 401 message
				logger.error('Could not find bearer token in request headers');
				return next(errors.unauthorized());
			}
		}
	};
};


