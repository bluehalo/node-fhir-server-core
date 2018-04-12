const controller = require('./patient.controller');
const { CONFIG_KEYS } = require('../../../constants');

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
		path: '/:version/patient',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
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
		}, {
			name: 'family',
			type: 'string'
		}],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'post',
		path: '/:version/patient/_search',
		corsOptions: {
			methods: ['POST']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
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
		}, {
			name: 'family',
			type: 'string'
		}],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'get',
		path: '/:version/patient/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
			name: 'id',
			type: 'string',
			required: true
		}],
		scopes: scopes,
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
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
