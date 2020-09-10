const { Strategy } = require('passport-http-bearer');
const superagent = require('superagent');

/**
 * @function SmartOnFHIRStrategy
 * @description Bearer strategy for the Smart on FHIR specification
 * @param {Object} config - Configurations for the Smart on FHIR strategy
 * @param {String} config.introspectionUrl - Introspection url to validate tokens
 * @param {String} config.clientId
 * @param {String} config.clientSecret
 * @return {Strategy} Valid bearer strategy to use with passport
 */
module.exports = function SmartOnFHIRStrategy(config = {}) {
	return new Strategy(function SmartBearer(token, done) {
		// Grab the required config options
		let { introspectionUrl, clientId, clientSecret } = config;
		// We must have an introspectionUrl to validate tokens
		if (!introspectionUrl) {
			let message =
				'No introspection endpoint provided. The server cannot use the bearer strategy without an introspection url.';
			return done(new Error(message));
		}
		// We also must have clientId and clientSecret
		if (!clientId || !clientSecret) {
			let message =
				'No clientId and clientSecret were provided. You cannot use the bearer strategy without these.';
			return done(new Error(message));
		}
		// Make a POST request to our introspection endpoint and pass back an active token
		return superagent
			.post(introspectionUrl)
			.set('content-type', 'application/x-www-form-urlencoded')
			.send({ token: token, client_id: clientId, client_secret: clientSecret })
			.then(res => {
				let decoded = res.body;
				if (decoded.active) {
					return done(null, decoded);
				} else {
					return done(new Error('Unable to retrieve valid token.'));
				}
			})
			.catch(done);
	});
};
