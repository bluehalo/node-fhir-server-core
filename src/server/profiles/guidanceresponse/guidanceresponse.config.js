const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./guidanceresponse.arguments');
const controller = require('./guidanceresponse.controller');

let write_only_scopes = write_scopes('GuidanceResponse');
let read_only_scopes = read_scopes('GuidanceResponse');

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
		path: '/:version/guidanceresponse',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGuidanceResponse
	},
	{
		type: 'post',
		path: '/:version/guidanceresponse/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getGuidanceResponse
	},
	{
		type: 'get',
		path: '/:version/guidanceresponse/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getGuidanceResponseById
	},
	{
		type: 'post',
		path: '/:version/guidanceresponse',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createGuidanceResponse
	},
	{
		type: 'put',
		path: '/:version/guidanceresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateGuidanceResponse
	},
	{
		type: 'delete',
		path: '/:version/guidanceresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteGuidanceResponse
	}
];

/**
 * @name exports
 * @summary GuidanceResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GUIDANCERESPONSE
	},
	routes
};
