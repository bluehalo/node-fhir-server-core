const { sanitizeMiddleware } = require('../../utils/sanitize.utils');
const { routes } = require('../oauth.config');


/**
 * @name exports
 * @summary Oauth routes
 */
module.exports = (app, profiles, logger) => {
	// Only add routes if we have an OAUTH profile
	// the endpoint can't function without the config

	if (profiles.oauth) {
		routes.forEach((route) => {
			app[route.type](
				route.path,
				sanitizeMiddleware(route.args),
				route.controller(profiles.observation, logger)
			);
		});
	}
};
