const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./expansionprofile.arguments');
const controller = require('./expansionprofile.controller');

let write_only_scopes = write_scopes('ExpansionProfile');
let read_only_scopes = read_scopes('ExpansionProfile');

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
		path: '/:version/expansionprofile',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getExpansionProfile
	},
	{
		type: 'post',
		path: '/:version/expansionprofile/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getExpansionProfile
	},
	{
		type: 'get',
		path: '/:version/expansionprofile/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getExpansionProfileById
	},
	{
		type: 'post',
		path: '/:version/expansionprofile',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createExpansionProfile
	},
	{
		type: 'put',
		path: '/:version/expansionprofile/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateExpansionProfile
	},
	{
		type: 'delete',
		path: '/:version/expansionprofile/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteExpansionProfile
	}
];

/**
 * @name exports
 * @summary ExpansionProfile config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.EXPANSIONPROFILE
	},
	routes
};
