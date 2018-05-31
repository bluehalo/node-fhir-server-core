const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./requestgroup.arguments');
const controller = require('./requestgroup.controller');

let write_only_scopes = write_scopes('RequestGroup');
let read_only_scopes = read_scopes('RequestGroup');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/requestgroup',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRequestGroup
	},
	{
		type: 'post',
		path: '/:version/requestgroup/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRequestGroup
	},
	{
		type: 'get',
		path: '/:version/requestgroup/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getRequestGroupById
	},
	{
		type: 'post',
		path: '/:version/requestgroup',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createRequestGroup
	},
	{
		type: 'put',
		path: '/:version/requestgroup/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateRequestGroup
	},
	{
		type: 'delete',
		path: '/:version/requestgroup/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteRequestGroup
	}
];

/**
 * @name exports
 * @summary RequestGroup config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.REQUESTGROUP
	},
	routes
};
