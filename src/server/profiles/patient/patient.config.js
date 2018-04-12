const controller = require('./patient.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

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
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-city',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-country',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-postalcode',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-state',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-use',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'animal-breed',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'animal-species',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'birthdate',
			type: 'date',
		}, {
			versions: [VERSIONS.STU3],
			name: 'death-date',
			type: 'date',
		}, {
			versions: [VERSIONS.STU3],
			name: 'deceased',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'email',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'family',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'gender',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'general-practitioner',
			type: 'reference',
		}, {
			versions: [VERSIONS.STU3],
			name: 'given',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'language',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'link',
			type: 'reference',
		}, {
			versions: [VERSIONS.STU3],
			name: 'name',
			type: 'string',
		}, {
			versions: [VERSIONS.STU3],
			name: 'organization',
			type: 'reference',
		}, {
			versions: [VERSIONS.STU3],
			name: 'phone',
			type: 'token',
		}, {
			versions: [VERSIONS.STU3],
			name: 'phonetic',
			type: 'string',
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

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
};
