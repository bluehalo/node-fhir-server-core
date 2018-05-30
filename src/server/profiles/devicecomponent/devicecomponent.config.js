const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./devicecomponent.arguments');
const controller = require('./devicecomponent.controller');

let write_only_scopes = write_scopes('DeviceComponent');
let read_only_scopes = read_scopes('DeviceComponent');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceComponent
	},
	{
		type: 'post',
		path: '/:version/devicecomponent/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceComponent
	},
	{
		type: 'get',
		path: '/:version/devicecomponent/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDeviceComponentById
	},
	{
		type: 'post',
		path: '/:version/devicecomponent',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDeviceComponent
	},
	{
		type: 'put',
		path: '/:version/devicecomponent/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDeviceComponent
	},
	{
		type: 'delete',
		path: '/:version/devicecomponent/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDeviceComponent
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
