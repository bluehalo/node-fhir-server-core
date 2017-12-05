const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { routes } = require(path.resolve('./src/server/patient/patient.config'));

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = app => {

  routes.forEach((route) => {
    app[route.type](
      route.path,
      sanitizeMiddleware(route.args),
      route.controller
    );
  });

};
