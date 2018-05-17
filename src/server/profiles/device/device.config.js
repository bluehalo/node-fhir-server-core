const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./device.arguments');
const controller = require('./device.controller');

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

let commonArgsArray = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resourceArgsArray = Object.getOwnPropertyNames(resource_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...commonArgsArray, ...resourceArgsArray,
];

let routes = [
	{
		type: 'get',
		path: '/:version/device',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDevice
	},
	{
		type: 'post',
		path: '/:version/device/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDevice
	},
	{
		type: 'get',
		path: '/:version/device/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceById
	}
];

/**
 * @name exports
 * @summary Device config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICE
	},
	routes
};
