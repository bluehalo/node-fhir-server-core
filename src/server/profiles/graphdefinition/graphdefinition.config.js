const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./graphdefinition.arguments');
const controller = require('./graphdefinition.controller');

let write_only_scopes = write_scopes('GraphDefinition');
let read_only_scopes = read_scopes('GraphDefinition');

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
		path: '/:version/graphdefinition',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGraphDefinition
	},
	{
		type: 'post',
		path: '/:version/graphdefinition/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGraphDefinition
	},
	{
		type: 'get',
		path: '/:version/graphdefinition/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getGraphDefinitionById
	},
	{
		type: 'post',
		path: '/:version/graphdefinition',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createGraphDefinition
	},
	{
		type: 'put',
		path: '/:version/graphdefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateGraphDefinition
	},
	{
		type: 'delete',
		path: '/:version/graphdefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteGraphDefinition
	}
];

/**
 * @name exports
 * @summary GraphDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GRAPHDEFINITION
	},
	routes
};
