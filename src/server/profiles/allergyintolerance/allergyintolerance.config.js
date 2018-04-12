const controller = require('./allergyintolerance.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/AllergyIntolerance.*',
	'user/AllergyIntolerance.read',
	'user/*.read',
	'allergyintolerance/*.*',
	'allergyintolerance/AllergyIntolerance.*',
	'allergyintolerance/AllergyIntolerance.read',
	'allergyintolerance/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/allergyintolerance',
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
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'post',
		path: '/:version/allergyintolerance/_search',
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
			name: 'asserter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'clinical-status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'criticality',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'last-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'manifestation',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'onset',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'recorder',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'route',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'severity',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'type',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'verification-status',
			type: 'token',
		}],
		scopes: scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'get',
		path: '/:version/allergyintolerance/:id',
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
		controller: controller.getAllergyIntoleranceById
	}
];

/**
 * @name exports
 * @summary AllergyIntolerance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
