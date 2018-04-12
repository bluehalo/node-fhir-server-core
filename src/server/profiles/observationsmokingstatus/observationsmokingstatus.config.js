const controller = require('./observationsmokingstatus.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/ObservationSmokingStatus.*',
	'user/ObservationSmokingStatus.read',
	'user/*.read',
	'observationsmokingstatus/*.*',
	'observationsmokingstatus/ObservationSmokingStatus.*',
	'observationsmokingstatus/ObservationSmokingStatus.read',
	'observationsmokingstatus/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observationsmokingstatus',
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
		controller: controller.getObservationSmokingStatus
	},
	{
		type: 'post',
		path: '/:version/observationsmokingstatus/_search',
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
		controller: controller.getObservationSmokingStatus
	},
	{
		type: 'get',
		path: '/:version/observationsmokingstatus/:id',
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
		controller: controller.getObservationSmokingStatusById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary ObservationSmokingStatus config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
