const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./deviceusestatement.arguments');
const controller = require('./deviceusestatement.controller');

let write_only_scopes = write_scopes('DeviceUseStatement');
let read_only_scopes = read_scopes('DeviceUseStatement');

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
		path: '/:version/deviceusestatement',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceUseStatement
	},
	{
		type: 'post',
		path: '/:version/deviceusestatement/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getDeviceUseStatement
	},
	{
		type: 'get',
		path: '/:version/deviceusestatement/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDeviceUseStatementById
	},
	{
		type: 'post',
		path: '/:version/deviceusestatement',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDeviceUseStatement
	},
	{
		type: 'put',
		path: '/:version/deviceusestatement/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDeviceUseStatement
	},
	{
		type: 'delete',
		path: '/:version/deviceusestatement/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDeviceUseStatement
	}
];

/**
 * @name exports
 * @summary DeviceUseStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICEUSESTATEMENT
	},
	routes
};
