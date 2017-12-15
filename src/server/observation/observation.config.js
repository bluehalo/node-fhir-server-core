const path = require('path');
const controller = require(path.resolve('./src/server/observation/controllers/observation.controller'));


let routes = [
  {
    type: 'get',
    path: '/dstu2/observation',
    args: [],
    scopes: [],
    controller: controller.getObservation
  }
];

/**
 * @name exports
 * @summary Observations config
 */
module.exports = {
  routes
};
