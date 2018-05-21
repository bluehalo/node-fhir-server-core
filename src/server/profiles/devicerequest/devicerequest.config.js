const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./devicerequest.arguments');
const controller = require('./devicerequest.controller');

const scopes = [
	'user/*.*',
	'user/DeviceRequest.*',
	'user/DeviceRequest.read',
	'user/*.read',
	'devicerequest/*.*',
	'devicerequest/DeviceRequest.*',
	'devicerequest/DeviceRequest.read',
	'devicerequest/*.read'
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
		path: '/:version/devicerequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceRequest
	},
	{
		type: 'post',
		path: '/:version/devicerequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceRequest
	},
	{
		type: 'get',
		path: '/:version/devicerequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceRequestById
	}
];

/**
 * @name exports
 * @summary DeviceRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICEREQUEST
	},
	routes
};
