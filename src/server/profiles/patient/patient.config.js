const controller = require('./patient.controller');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');

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
		base: VERSIONS.DSTU2,
		path: '/patient',
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
		}, {
			name: 'family',
			type: 'string'
		}],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'post',
		base: VERSIONS.DSTU2,
		path: '/patient/_search',
		corsOptions: {
			methods: ['POST']
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
		}, {
			name: 'family',
			type: 'string'
		}],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'get',
		base: VERSIONS.DSTU2,
		path: '/patient/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
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
		profileKey: CONFIG_KEYS.PATIENT,
		version: VERSIONS.DSTU2
	},
	routes,
	codes
};
