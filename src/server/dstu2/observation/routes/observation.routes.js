const cors = require('cors');
const { sanitizeMiddleware } = require('../../../utils/sanitize.utils');
const { routes } = require('../observation.config');
const { validate } = require('../../../utils/auth');


/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, config, logger) => {
	let { profiles, server } = config;
	let observationProfile = profiles.dstu2 && profiles.dstu2.observation;

	if (observationProfile) {
		let baseOptions = Object.assign({}, server.corsOptions, observationProfile.corsOptions);

		routes.forEach((route) => {
			let corsOptions = Object.assign({}, baseOptions, route.corsOptions);
			// Enable options
			app.options(route.path, cors(corsOptions));
			// Enable route

			app[route.type](
				route.path,
				cors(corsOptions),
				sanitizeMiddleware(route.args),
				validate(route.scopes, logger, config),
				route.controller(observationProfile, logger, config)
			);
		});
	}
};
