const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./processresponse.arguments');
const controller = require('./processresponse.controller');

let write_only_scopes = write_scopes('ProcessResponse');
let read_only_scopes = read_scopes('ProcessResponse');

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
		path: '/:version/processresponse',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProcessResponse
	},
	{
		type: 'post',
		path: '/:version/processresponse/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProcessResponse
	},
	{
		type: 'get',
		path: '/:version/processresponse/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getProcessResponseById
	},
	{
		type: 'post',
		path: '/:version/processresponse',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createProcessResponse
	},
	{
		type: 'put',
		path: '/:version/processresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateProcessResponse
	},
	{
		type: 'delete',
		path: '/:version/processresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteProcessResponse
	}
];

/**
 * @name exports
 * @summary ProcessResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCESSRESPONSE
	},
	routes
};
