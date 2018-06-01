const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./processrequest.arguments');
const controller = require('./processrequest.controller');

let write_only_scopes = write_scopes('ProcessRequest');
let read_only_scopes = read_scopes('ProcessRequest');

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
		path: '/:version/processrequest',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getProcessRequest
	},
	{
		type: 'post',
		path: '/:version/processrequest/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getProcessRequest
	},
	{
		type: 'get',
		path: '/:version/processrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getProcessRequestById
	},
	{
		type: 'post',
		path: '/:version/processrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createProcessRequest
	},
	{
		type: 'put',
		path: '/:version/processrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateProcessRequest
	},
	{
		type: 'delete',
		path: '/:version/processrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteProcessRequest
	}
];

/**
 * @name exports
 * @summary ProcessRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCESSREQUEST
	},
	routes
};
