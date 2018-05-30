const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./basic.arguments');
const controller = require('./basic.controller');

let write_only_scopes = write_scopes('Basic');
let read_only_scopes = read_scopes('Basic');

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
		path: '/:version/basic',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getBasic
	},
	{
		type: 'post',
		path: '/:version/basic/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getBasic
	},
	{
		type: 'get',
		path: '/:version/basic/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getBasicById
	},
	{
		type: 'post',
		path: '/:version/basic',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createBasic
	},
	{
		type: 'put',
		path: '/:version/basic/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateBasic
	},
	{
		type: 'delete',
		path: '/:version/basic/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteBasic
	}
];

/**
 * @name exports
 * @summary Basic config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BASIC
	},
	routes
};
