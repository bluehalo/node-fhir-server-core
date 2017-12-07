const path = require('path');
const controller = require(path.resolve('./src/server/patient/controllers/patient.controller'));

const scopes = [
  'user/*.*',
  'user/Patient.*',
  'user/Patient.read',
  'user/*.read',
  'patient/*.*',
  'patient/Patient.*',
  'patient/Patient.read',
  'patient/*.read'
];

let routes = [
  {
    type: 'get',
    path: '/dstu2/patient',
    args: [{
      name: 'name',
      type: 'string'
    }, {
      name: 'birthdate',
      type: 'string'
    }, {
      name: 'gender',
      type: 'string'
    }, {
      name: 'given',
      type: 'string'
    }],
    scopes,
    controller: controller.getPatient
  },
  {
    type: 'get',
    path: '/dstu2/patient/:id',
    args: [{
      name: 'id',
      type: 'string',
      required: true
    }],
    scopes,
    controller: controller.getPatientById
  }
];

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
  routes
};
