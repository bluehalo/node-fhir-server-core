const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./eligibilityrequest.arguments');
const controller = require('./eligibilityrequest.controller');

let write_only_scopes = write_scopes('EligibilityRequest');
let read_only_scopes = read_scopes('EligibilityRequest');

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
		path: '/:version/eligibilityrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEligibilityRequest
	},
	{
		type: 'post',
		path: '/:version/eligibilityrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEligibilityRequest
	},
	{
		type: 'get',
		path: '/:version/eligibilityrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getEligibilityRequestById
	},
	{
		type: 'post',
		path: '/:version/eligibilityrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createEligibilityRequest
	},
	{
		type: 'put',
		path: '/:version/eligibilityrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateEligibilityRequest
	},
	{
		type: 'delete',
		path: '/:version/eligibilityrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteEligibilityRequest
	}
];

/**
 * @name exports
 * @summary EligibilityRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ELIGIBILITYREQUEST
	},
	routes
};
