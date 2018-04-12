const controller = require('./practitioner.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Practitioner.*',
	'user/Practitioner.read',
	'user/*.read',
	'patient/*.*',
	'patient/Practitioner.*',
	'patient/Practitioner.read',
	'patient/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/practitioner',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		},
			{
				name: '_content',
				type: 'string'
			},
			{
				name: '_id',
				type: 'token'
			},
			{
				name: '_lastUpdated',
				type: 'date'
			},
			{
				name: '_profile',
				type: 'uri'
			},
			{
				name: '_query',
				type: 'token'
			},
			{
				name: '_security',
				type: 'token'
			},
			{
				name: '_tag',
				type: 'token'
			},
		
		
		],
		scopes: scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'post',
		path: '/:version/practitioner/_search',
		corsOptions: {
			methods: ['POST']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
			name: '_content',
			type: 'string'
		}, {
			name: '_id',
			type: 'token'
		}, {
			name: '_lastUpdated',
			type: 'date'
		}, {
			name: '_profile',
			type: 'uri'
		}, {
			name: '_query',
			type: 'token'
		}, {
			name: '_security',
			type: 'token'
		}, {
			name: '_tag',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'active',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-city',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-country',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-postalcode',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-state',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-use',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'communication',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'email',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'family',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'gender',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'given',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'name',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'phone',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'phonetic',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'telecom',
			type: 'token',
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
		profileKey: CONFIG_KEYS.PRACTITIONER
	},
	routes,
	codes
};
