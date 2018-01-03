const cors = require('cors');
const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/observation/observation.config'));

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, config, logger) => {
	let { profiles } = config;
	// Only add routes if we have a patient profile
	// the endpoint can't function without the config
	if (profiles.observation) {
		routes.forEach((route) => {
			// Enable options
			app.options(route.path, cors(route.corsOptions));
			// Enable route
			app[route.type](
				route.path,
				cors(route.corsOptions),
				sanitizeMiddleware(route.args),
				route.controller(profiles.observation, logger)
			);
		});
	}
};
