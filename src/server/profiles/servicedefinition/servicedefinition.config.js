const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./servicedefinition.arguments');
const controller = require('./servicedefinition.controller');

let write_only_scopes = write_scopes('ServiceDefinition');
let read_only_scopes = read_scopes('ServiceDefinition');

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
		path: '/:version/servicedefinition',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getServiceDefinition
	},
	{
		type: 'post',
		path: '/:version/servicedefinition/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getServiceDefinition
	},
	{
		type: 'get',
		path: '/:version/servicedefinition/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getServiceDefinitionById
	},
	{
		type: 'post',
		path: '/:version/servicedefinition',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createServiceDefinition
	},
	{
		type: 'put',
		path: '/:version/servicedefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateServiceDefinition
	},
	{
		type: 'delete',
		path: '/:version/servicedefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteServiceDefinition
	}
];

/**
 * @name exports
 * @summary ServiceDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SERVICEDEFINITION
	},
	routes
};
