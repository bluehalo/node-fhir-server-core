const path = require('path');
const controller = require(path.resolve('./src/server/metadata/controllers/metadata.controller'));


let routes = [
  {
    type: 'get',
    path: '/dstu2/metadata',
    args: [],
    scopes: [],
    controller: controller.getCapabilityStatement
  }
];

/**
 * @name exports
 * @summary Metadata config
 */
module.exports = {
  routes
};
