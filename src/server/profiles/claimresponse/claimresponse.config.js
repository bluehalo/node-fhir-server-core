const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./claimresponse.arguments');
const controller = require('./claimresponse.controller');

let write_only_scopes = write_scopes('ClaimResponse');
let read_only_scopes = read_scopes('ClaimResponse');

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
		path: '/:version/claimresponse',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClaimResponse
	},
	{
		type: 'post',
		path: '/:version/claimresponse/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClaimResponse
	},
	{
		type: 'get',
		path: '/:version/claimresponse/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getClaimResponseById
	},
	{
		type: 'post',
		path: '/:version/claimresponse',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createClaimResponse
	},
	{
		type: 'put',
		path: '/:version/claimresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateClaimResponse
	},
	{
		type: 'delete',
		path: '/:version/claimresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteClaimResponse
	}
];

/**
 * @name exports
 * @summary ClaimResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLAIMRESPONSE
	},
	routes
};
