const controller = require('./medication.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Medication.*',
	'user/Medication.read',
	'user/*.read',
	'medication/*.*',
	'medication/Medication.*',
	'medication/Medication.read',
	'medication/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/medication',
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
		controller: controller.getMedication
	},
	{
		type: 'post',
		path: '/:version/medication/_search',
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
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}],
		scopes: scopes,
		controller: controller.getMedication
	},
	{
		type: 'get',
		path: '/:version/medication/:id',
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
		controller: controller.getMedicationById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Medication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
