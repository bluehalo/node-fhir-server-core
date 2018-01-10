const cors = require('cors');
const { sanitizeMiddleware } = require('../../utils/sanitize.utils');
const { routes } = require('../metadata.config');

/**
 * @name exports
 * @summary Metadata routes
 */
module.exports = (app, config, logger) => {
	routes.forEach((route) => {
		// Enable options
		app.options(route.path, cors(route.corsOptions));
		// Enable route
		app[route.type](
			route.path,
			cors(route.corsOptions),
			sanitizeMiddleware(route.args),
			route.controller(config, logger)
		);
	});

};
