const path = require('path');
const service = require(path.resolve('./src/server/patient/services/patient.service'));


module.exports.getPatient = (req, res) => {

  console.log('Query: ', req.query);
  res.send('Here is your patient');
  
};


module.exports.getPatientById = (req, res) => {

  console.log('Params: ', req.params);
  res.send('Here is your patient');
  
};