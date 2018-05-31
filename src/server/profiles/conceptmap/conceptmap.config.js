const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./conceptmap.arguments');
const controller = require('./conceptmap.controller');

let write_only_scopes = write_scopes('ConceptMap');
let read_only_scopes = read_scopes('ConceptMap');

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
		path: '/:version/conceptmap',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getConceptMap
	},
	{
		type: 'post',
		path: '/:version/conceptmap/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getConceptMap
	},
	{
		type: 'get',
		path: '/:version/conceptmap/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getConceptMapById
	},
	{
		type: 'post',
		path: '/:version/conceptmap',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createConceptMap
	},
	{
		type: 'put',
		path: '/:version/conceptmap/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateConceptMap
	},
	{
		type: 'delete',
		path: '/:version/conceptmap/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteConceptMap
	}
];

/**
 * @name exports
 * @summary ConceptMap config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONCEPTMAP
	},
	routes
};
