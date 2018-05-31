const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./messagedefinition.arguments');
const controller = require('./messagedefinition.controller');

let write_only_scopes = write_scopes('MessageDefinition');
let read_only_scopes = read_scopes('MessageDefinition');

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
		path: '/:version/messagedefinition',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMessageDefinition
	},
	{
		type: 'post',
		path: '/:version/messagedefinition/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMessageDefinition
	},
	{
		type: 'get',
		path: '/:version/messagedefinition/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMessageDefinitionById
	},
	{
		type: 'post',
		path: '/:version/messagedefinition',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMessageDefinition
	},
	{
		type: 'put',
		path: '/:version/messagedefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMessageDefinition
	},
	{
		type: 'delete',
		path: '/:version/messagedefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMessageDefinition
	}
];

/**
 * @name exports
 * @summary MessageDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MESSAGEDEFINITION
	},
	routes
};
