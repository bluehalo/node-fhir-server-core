const cors = require('cors');
const { routes } = require('../oauth.config');

/**
 * @name exports
 * @summary Oauth routes
 */
module.exports = (app, config, logger) => {
	let { profiles, server } = config;

	let oauth = profiles.dstu2 && profiles.dstu2.oauth;


	// Only add routes if we have a oauth profile
	// the endpoint can't function without the config
	if (oauth) {
		let baseOptions = Object.assign({}, server.corsOptions, oauth.corsOptions);

		routes.forEach((route) => {
			let corsOptions = Object.assign({}, baseOptions, route.corsOptions);
			// Enable options
			app.options(route.path, cors(corsOptions));

			// Enable route
			app[route.type](
				route.path,
				route.controller(oauth, config, logger)
			);
		});
	}

};