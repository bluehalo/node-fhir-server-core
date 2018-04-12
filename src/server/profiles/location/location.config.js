const controller = require('./location.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Location.*',
	'user/Location.read',
	'user/*.read',
	'location/*.*',
	'location/Location.*',
	'location/Location.read',
	'location/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/location',
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
		controller: controller.getLocation
	},
	{
		type: 'post',
		path: '/:version/location/_search',
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
			name: 'endpoint',
			type: 'reference'
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
			name: 'near',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'near-distance',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'operational-status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'organization',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'partof',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'type',
			type: 'token'
		}],
		scopes: scopes,
		controller: controller.getLocation
	},
	{
		type: 'get',
		path: '/:version/location/:id',
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
		controller: controller.getLocationById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Location config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
