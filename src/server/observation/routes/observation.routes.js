const path = require('path');
const controller = require(path.resolve('./src/server/observation/controllers/observation.controller'));

/**
 * @name exports
 * @summary Observation routes
 */
module.exports = app => {

  app.get('/observation', controller.getObservations);

};
