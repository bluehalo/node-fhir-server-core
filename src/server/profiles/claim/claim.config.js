const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./claim.arguments');
const controller = require('./claim.controller');

let write_only_scopes = write_scopes('Claim');
let read_only_scopes = read_scopes('Claim');

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
		path: '/:version/claim',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClaim
	},
	{
		type: 'post',
		path: '/:version/claim/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClaim
	},
	{
		type: 'get',
		path: '/:version/claim/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getClaimById
	},
	{
		type: 'post',
		path: '/:version/claim',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createClaim
	},
	{
		type: 'put',
		path: '/:version/claim/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateClaim
	},
	{
		type: 'delete',
		path: '/:version/claim/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteClaim
	}
];

/**
 * @name exports
 * @summary Claim config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLAIM
	},
	routes
};
