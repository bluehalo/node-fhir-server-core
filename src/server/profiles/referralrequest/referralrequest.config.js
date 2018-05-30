const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./referralrequest.arguments');
const controller = require('./referralrequest.controller');

let write_only_scopes = write_scopes('ReferralRequest');
let read_only_scopes = read_scopes('ReferralRequest');

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
		path: '/:version/referralrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getReferralRequest
	},
	{
		type: 'post',
		path: '/:version/referralrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getReferralRequest
	},
	{
		type: 'get',
		path: '/:version/referralrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getReferralRequestById
	},
	{
		type: 'post',
		path: '/:version/referralrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createReferralRequest
	},
	{
		type: 'put',
		path: '/:version/referralrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateReferralRequest
	},
	{
		type: 'delete',
		path: '/:version/referralrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteReferralRequest
	}
];

/**
 * @name exports
 * @summary ReferralRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.REFERRALREQUEST
	},
	routes
};
