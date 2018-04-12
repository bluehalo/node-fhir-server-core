const controller = require('./immunization.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Immunization.*',
	'user/Immunization.read',
	'user/*.read',
	'immunization/*.*',
	'immunization/Immunization.*',
	'immunization/Immunization.read',
	'immunization/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/immunization',
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
		controller: controller.getImmunization
	},
	{
		type: 'post',
		path: '/:version/immunization/_search',
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
			name: 'date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'dose-sequence',
			type: 'number'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'location',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'lot-number',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'manufacturer',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'notgiven',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'practitioner',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'reaction',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'reaction-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'reason',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'reason-not-given',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'vaccine-code',
			type: 'token'
		}],
		scopes: scopes,
		controller: controller.getImmunization
	},
	{
		type: 'get',
		path: '/:version/immunization/:id',
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
		controller: controller.getImmunizationById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Immunization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
