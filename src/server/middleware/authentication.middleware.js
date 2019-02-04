const noOpMiddleware = require('./noop.middleware.js');
const passport = require('passport');

/**
 * @description Middleware for doing authentication, simople wrapper around passport
 * @param {Object} config - Configurations for the application
 * @return {function} valid express middleware
 */
module.exports = function authenticationMiddleware(config) {
	// Don't do any validation for testing
	if (process.env.NODE_ENV === 'test') {
		return noOpMiddleware;
	}

	// if strategy is configured
	if (config.auth && config.auth.strategy) {
		let { name, useSession = false } = config.auth.strategy;
		return passport.authenticate(name, { session: useSession });
	} else {
		return noOpMiddleware;
	}
};
