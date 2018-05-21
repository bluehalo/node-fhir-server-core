const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./devicecomponent.arguments');
const controller = require('./devicecomponent.controller');

const scopes = [
	'user/*.*',
	'user/DeviceComponent.*',
	'user/DeviceComponent.read',
	'user/*.read',
	'devicecomponent/*.*',
	'devicecomponent/DeviceComponent.*',
	'devicecomponent/DeviceComponent.read',
	'devicecomponent/*.read'
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
		path: '/:version/devicecomponent',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceComponent
	},
	{
		type: 'post',
		path: '/:version/devicecomponent/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceComponent
	},
	{
		type: 'get',
		path: '/:version/devicecomponent/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceComponentById
	}
];

/**
 * @name exports
 * @summary DeviceComponent config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICECOMPONENT
	},
	routes
};
