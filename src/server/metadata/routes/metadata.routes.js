const path = require('path');
const controller = require(path.resolve('./src/server/metadata/controllers/metadata.controller'));

/**
 * @name exports
 * @summary Metadata routes
 */
module.exports = app => {
  
  app.get('/metadata', controller.getCapabilityStatement);
  
};