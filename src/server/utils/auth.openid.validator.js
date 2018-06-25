const _ = require('lodash');
const request = require('superagent');
const errors = require('./error.utils');

/**
 * Parse the `token` from the given `req`'s authorization header.
 *
 * @param {Request} req
 * @return {String|null}
 */
function parseBearerToken(req) {

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
	const schema = parts.shift();
	const token = parts.join(' ');

	// validate that it is a bearer
	if (schema !== 'Bearer') {
		return null;
	}

	return token;
}

/**
 * Get valid scopes.
 *
 * @param {Object} scopes
 * @param {Array<String>} allowedScopes
 * @returns {Boolean}
 */
function getValidScopes(scopes, allowedScopes) {
	const tokenScope = scopes;
	const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(/[, ]/) : [];
	const intersection = _.intersection(scopeArray, allowedScopes);

	return intersection;
}

/**
 * @name validate
 * @summary {Function} Returns a middleware function that verifies bearer token and checks scope
 * @param {Array<String>} validScopes
 * @param {Object} loggerUtil
 * @param {Object} config
 */
module.exports.validate = (allowedScopes, logger, config) => {

	return async (req, res, next) => {
		let version = req.params.base;

		// get bearer token
		const bearerToken = parseBearerToken(req);

		if (bearerToken) {
			return request
				.post(config.auth.introspectionUrl)
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({token: bearerToken, client_id: config.auth.protectedResourceClientId, client_secret: config.auth.protectedResourceClientSecret})
				.then((introspectionResponse) => {

					const token = introspectionResponse.body;
					if (token.active) {
						const { scope, context, aud, sub, user_id } = token;

						// make sure the token is intended for our server
						if (aud && aud === config.auth.resourceServer) {
							// get scopes that are valid for the endpoint specified
							const scopes = getValidScopes(scope, allowedScopes);
							// verify if token has one of the required scopes
							if (scopes && scopes.length > 0) {
								// attach patient id to req or validate request and patient
								// TODO: verify this as it could be done in different ways
								if (context && context.patient) {
									req.patient = context.patient;
								}
								// if location
								if (context && context.location) {
									req.location = context.location;
								}
								// if encounter
								if (context && context.encounter) {
									req.encounter = context.encounter;
								}

								// attach user information to request
								// this may change based on Auth impl
								req.user = { user_id, sub };

								// validation complete
								return next();
							}
						}
					}
					// default return unauthorized
					return next(errors.unauthorized('Invalid token', version));
				})
				.catch((err) => {
					logger.error(err);
					return next(errors.unauthorized('Invalid token', version));
				});
			}

		return next(errors.unauthorized('Invalid token', version));
	};
};
