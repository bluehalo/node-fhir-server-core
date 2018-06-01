const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./devicerequest.arguments');
const controller = require('./devicerequest.controller');

let write_only_scopes = write_scopes('DeviceRequest');
let read_only_scopes = read_scopes('DeviceRequest');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resource_all_arguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/devicerequest',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceRequest
	},
	{
		type: 'post',
		path: '/:version/devicerequest/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceRequest
	},
	{
		type: 'get',
		path: '/:version/devicerequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDeviceRequestById
	},
	{
		type: 'post',
		path: '/:version/devicerequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDeviceRequest
	},
	{
		type: 'put',
		path: '/:version/devicerequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDeviceRequest
	},
	{
		type: 'delete',
		path: '/:version/devicerequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDeviceRequest
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
