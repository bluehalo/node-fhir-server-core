const controller = require('./device.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Device.*',
	'user/Device.read',
	'user/*.read',
	'device/*.*',
	'device/Device.*',
	'device/Device.read',
	'device/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/device',
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
		controller: controller.getDevice
	},
	{
		type: 'post',
		path: '/:version/device/_search',
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
			name: 'device-name',
			type: 'string'
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
			name: 'manufacturer',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'model',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'organization',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'type',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'udi-carrier',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'udi-di',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'url',
			type: 'uri'
		}],
		scopes: scopes,
		controller: controller.getDevice
	},
	{
		type: 'get',
		path: '/:version/device/:id',
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
		controller: controller.getDeviceById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Device config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
