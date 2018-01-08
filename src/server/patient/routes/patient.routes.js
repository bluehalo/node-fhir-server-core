const cors = require('cors');
const { sanitizeMiddleware } = require('../../utils/sanitize.utils');
const { validate } = require('../../utils/auth');
const { routes } = require('../patient.config');

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, config, logger) => {
	let { profiles, server } = config;

	// Only add routes if we have a patient profile
	// the endpoint can't function without the config
	if (profiles.patient) {
		let baseOptions = Object.assign({}, server.corsOptions, profiles.patient.corsOptions);

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
				route.controller(profiles.patient, logger)
			);
		});
	}

};
