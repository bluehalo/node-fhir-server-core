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
			// This supports all specs, omitting versions by default will be treated as
			// this route is available in all specs
			name: 'gender',
			type: 'string'
		}, {
			// This example explicitly declares support for DSTU2 Only
			versions: [ VERSIONS.DSTU2 ],
			name: 'given',
			type: 'code'
		}, {
			// This example explicitly declares support for STU3 Only
			versions: [ VERSIONS.STU3 ],
			name: 'given',
			type: 'string'
		}, {
			// This example explicitly declares it supports these versions
			versions: [ VERSIONS.DSTU2, VERSIONS.STU3 ],
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
	// ,	{
	// 	type: 'get',
	// 	path: '/:version/patient/friend/:id',
	// 	corsOptions: {
	// 		methods: ['GET']
	// 	},
	// 	args: [{
	// 		name: 'version',
	// 		type: 'string'
	// 	}, {
	// 		name: 'id',
	// 		type: 'string',
	// 		required: true
	// 	}],
	// 	scopes: scopes,
	// 	controller: controller.getPatientByFriend
	// }
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
