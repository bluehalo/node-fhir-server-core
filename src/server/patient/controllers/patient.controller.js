const path = require('path');
const service = require(path.resolve('./src/server/patient/services/patient.service'));

/**
 * @name exports
 * @summary Patient controller
 */
module.exports.getPatient = (req, res) => {
  
  res.send('Here is your patient');
  
};