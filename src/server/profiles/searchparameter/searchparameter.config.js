const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./searchparameter.arguments');
const controller = require('./searchparameter.controller');

let write_only_scopes = write_scopes('SearchParameter');
let read_only_scopes = read_scopes('SearchParameter');

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
		path: '/:version/searchparameter',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSearchParameter
	},
	{
		type: 'post',
		path: '/:version/searchparameter/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSearchParameter
	},
	{
		type: 'get',
		path: '/:version/searchparameter/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getSearchParameterById
	},
	{
		type: 'post',
		path: '/:version/searchparameter',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createSearchParameter
	},
	{
		type: 'put',
		path: '/:version/searchparameter/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateSearchParameter
	},
	{
		type: 'delete',
		path: '/:version/searchparameter/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteSearchParameter
	}
];

/**
 * @name exports
 * @summary SearchParameter config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SEARCHPARAMETER
	},
	routes
};
