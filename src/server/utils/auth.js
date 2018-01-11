const _ = require('lodash');
const jwt = require('jsonwebtoken');
const request = require('superagent');
const jwkToPem = require('jwk-to-pem');
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
	const schema = parts.shift().toLowerCase();
	const token = parts.join(' ');

	// validate that it is a bearer
	if (schema !== 'bearer') {
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
	const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(' ') : [];
	const intersection = _.intersection(scopeArray, allowedScopes);

	return intersection;
}

/**
 * Calls an introspection endpoint to validate the token.
 *
 * @param {String} token
 * @param {String} client
 * @param {Object} introspectionEndpoint
 * @returns {Promise} Returns the intrspection.
 */
async function introspect(token, client, introspectionEndpoint) {
	const introspectionResponse = await request
		.post(introspectionEndpoint)
		.auth(client.clientId, client.secret)
		.send(`token=${token}`);

	const introspection = introspectionResponse.body;

	if (!introspection.active) {
		throw new Error('Access token is not active');
	} else {
		return introspection;
	}
}


/**
 * Verify the JWT token.
 *
 * @param {String} token
 * @param {String} secretOrPublicKey
 * @param {Object} options
 * @param {Array<String>} validScopes
 * @param {Object} oauthConfig
 * @param {Function} next
 * @returns {Promise} Returns a promise that resolves to the result of the `next`.
 */
async function verifyToken(decodedToken, token, client, issuer) {

	// validates the aud, issues
	const baseOptions = { 
		audience: client.clientId, 
		issuer: issuer 
	};

	// check for algorithm
	if (decodedToken && decodedToken.header && decodedToken.header.alg) {

		let validToken;
		if (decodedToken.header.alg.startsWith('HS')) {

			// IF HS*** algorith, validate signature based on secret key
			validToken = jwt.verify(token, client.secret, baseOptions);

		} else if (decodedToken.header.alg.startsWith('RS')) {
			// IF RS*** algorithm, validate signature based on certificate
	
			// add algorithm to options
			const options = Object.assign(options, { algorithms: [decodedToken.header.alg] });

			// use public key
			// update this to point to where public key should be if not in the client
			const jwtKey = client.publicKey;
			const pem = jwkToPem(jwtKey);
			validToken = jwt.verify(token, pem, options);
		}

		if (validToken) {
			return validToken;
		} else {
			throw new Error('Unable to validate signature');
		}

	} else {
		// invalid bearer token
		throw new Error('Unable to validate token');
	}
};



/**
 * @name validate
 * @summary {Function} Returns a middleware function that verifies bearer token and checks scope
 * @param {Array<String>} validScopes
 * @param {Object} loggerUtil
 * @param {Object} config
 */
module.exports.validate = (allowedScopes, logger, config) => {

	let handler = promise => promise
		.then(data => [null, data])
		.catch(err => [err]);

	let { serviceModule: service } = config.auth;

	return async (req, res, next) => {

			// get bearer token
			const bearerToken = parseBearerToken(req);

			if (bearerToken) {
				// decode token
				const decodedToken = jwt.decode(bearerToken, { complete: true });
				if (decodedToken) {

					let validToken;

					// get client
					let client = await service.getClient(decodedToken.aud);
					if (client) {
						// verify token and signature
						let [error, token] = await handler(verifyToken(decodedToken, bearerToken, client, config.auth.resourceServer));
						if (error) {
							logger.error(error);
							return next(errors.unauthorized());
						}
						validToken = token;

					} else {
						// if client isn't found, attempt to introspect
						if (config.auth.discoveryUrl) {

							let [ introspectionError, introspection ] = await handler(introspect(bearerToken, client, config.auth.discoveryUrl));
							if (introspectionError) {
								logger.error(introspectionError);
								return next(errors.unauthorized());
							}
							validToken = introspection;
						}
					}


					// we have a valid token at this point, let's verify the scope
					let scopes;
					// if scopes are on the token
					if (validToken.scope) {
						scopes = getValidScopes(validToken.scope, allowedScopes);
					} else if (client.scope) {
						// let's look at the scopes of the client
						scopes = getValidScopes(client.scope, allowedScopes);
					} 

					// verify if token has one of the required scopes
					if (scopes && scopes.length > 0) {
						// attach patient id to req or validate request and patient
						// TODO: verify this as it could be done in different ways
						// if (validToken.context && validToken.context.patient) {
						// 	req.patientId = validToken.context.patient;
						// }

						// req.patient is a signed or hash that the resource server knows
						// how to validate to get the real patient id

						// validation complete
						return next();
					} else {
						return next(errors.unauthorized());
					}
				} else {
					return next(errors.unauthorized()); 
				}
				

			} else {
				// did not pass checks, return 401 message
				logger.error('Could not find bearer token in request headers');
				return next(errors.unauthorized());
			}
	};
};