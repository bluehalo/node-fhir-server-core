// const path = require('path');
// const service = require(path.resolve('./src/server/patient/services/patient.service'));


module.exports.getPatient = (req, res) => {
  res.send('Here is your patient args' + JSON.stringify(req.query));
};


module.exports.getPatientById = (req, res) => {
  res.send('Here is your patient' + JSON.stringify(req.params));
};
