const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/observation/observation.config'));
const auth = require(path.resolve('./src/server/utils/auth'));
/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, profiles, logger, security) => {
	// Only add routes if we have a observation profile
	// the endpoint can't function without the config
	if (profiles.observation) {
		routes.forEach((route) => {
			if (security) {
				app[route.type](
					route.path,
					sanitizeMiddleware(route.args),
					auth.validate,
					route.controller(profiles.observation, logger)
				);
			} else {
				app[route.type](
					route.path,
					sanitizeMiddleware(route.args),
					route.controller(profiles.observation, logger)
				);
			}
		});
	}
};
