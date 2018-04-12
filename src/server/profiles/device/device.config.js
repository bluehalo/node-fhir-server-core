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
