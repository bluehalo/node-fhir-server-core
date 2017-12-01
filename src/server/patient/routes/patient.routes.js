const path = require('path');
const controller = require(path.resolve('./src/server/patient/controllers/patient.controller'));

/**
 * @name exports
 * @summary Patient routes
 */
module.exports = app => {
  
  app.get('/patient', controller.getPatient);
  
};