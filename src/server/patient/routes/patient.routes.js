const cors = require('cors');
const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/patient/patient.config'));
const {validate} = require(path.resolve('./src/server/utils/auth'));

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = (app, profiles, logger, oauthConfig) => {

	// Only add routes if we have a patient profile
	// the endpoint can't function without the config
	if (profiles.patient) {
		routes.forEach((route) => {
			// Enable options
			app.options(route.path, cors(route.corsOptions));
			// Enable route
			app[route.type](
				route.path,
				cors(route.corsOptions),
				sanitizeMiddleware(route.args),
				validate(route.scopes, logger, oauthConfig),
				route.controller(profiles.patient, logger)
			);
		});
	}

};
