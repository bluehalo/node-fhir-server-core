const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./capabilitystatement.arguments');
const controller = require('./capabilitystatement.controller');

let write_only_scopes = write_scopes('CapabilityStatement');
let read_only_scopes = read_scopes('CapabilityStatement');

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
		path: '/:version/capabilitystatement',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getCapabilityStatement
	},
	{
		type: 'post',
		path: '/:version/capabilitystatement/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getCapabilityStatement
	},
	{
		type: 'get',
		path: '/:version/capabilitystatement/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getCapabilityStatementById
	},
	{
		type: 'post',
		path: '/:version/capabilitystatement',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createCapabilityStatement
	},
	{
		type: 'put',
		path: '/:version/capabilitystatement/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateCapabilityStatement
	},
	{
		type: 'delete',
		path: '/:version/capabilitystatement/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteCapabilityStatement
	}
];

/**
 * @name exports
 * @summary CapabilityStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CAPABILITYSTATEMENT
	},
	routes
};
