const { sanitizeMiddleware } = require('../../utils/sanitize.utils');
const { routes } = require('../oauth.config');

/**
 * @name exports
 * @summary Oauth routes
 */
module.exports = (app, config, logger) => {
	let { profiles, server } = config;

	// Only add routes if we have a oauth profile
	// the endpoint can't function without the config
	if (profiles.oauth) {
		routes.forEach((route) => {
			// Enable route
			app[route.type](
				route.path,
				sanitizeMiddleware(route.args),
				route.controller(config, logger)
			);
		});
	}

};
