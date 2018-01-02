const cors = require('cors');
const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/metadata/metadata.config'));

/**
 * @name exports
 * @summary Metadata routes
 */
module.exports = (app, profiles, logger) => {

  routes.forEach((route) => {
		let corsOptions = { methods: [route.type] };
		// Enable options
		app.options(route.path, cors(corsOptions));
		// Enable route
		app[route.type](
			route.path,
			cors(corsOptions),
			sanitizeMiddleware(route.args),
			route.controller(profiles, logger)
		);
	});

};
