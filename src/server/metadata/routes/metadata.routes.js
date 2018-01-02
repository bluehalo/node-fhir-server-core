const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/metadata/metadata.config'));

/**
 * @name exports
 * @summary Metadata routes
 */
module.exports = (app, profiles, logger, security) => {

  routes.forEach((route) => {
		app[route.type](
			route.path,
			sanitizeMiddleware(route.args),
			route.controller(profiles, logger, security)
		);
	});

};
