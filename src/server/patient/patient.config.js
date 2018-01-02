const path = require('path');
const controller = require(path.resolve('./src/server/patient/controllers/patient.controller'));


let routes = [
  {
    type: 'get',
    path: '/dstu2/patient',
		corsOptions: {
			methods: ['GET']
		},
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
    scopes: [],
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
    scopes: [],
    controller: controller.getPatientById
  }
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
  routes,
	codes
};
