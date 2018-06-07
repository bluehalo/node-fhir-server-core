const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./eligibilityresponse.arguments');
const controller = require('./eligibilityresponse.controller');

let write_only_scopes = write_scopes('EligibilityResponse');
let read_only_scopes = read_scopes('EligibilityResponse');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resource_all_arguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/eligibilityresponse',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getEligibilityResponse
	},
	{
		type: 'post',
		path: '/:version/eligibilityresponse/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getEligibilityResponse
	},
	{
		type: 'get',
		path: '/:version/eligibilityresponse/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getEligibilityResponseById
	},
	{
		type: 'post',
		path: '/:version/eligibilityresponse',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createEligibilityResponse
	},
	{
		type: 'put',
		path: '/:version/eligibilityresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateEligibilityResponse
	},
	{
		type: 'delete',
		path: '/:version/eligibilityresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteEligibilityResponse
	}
];

/**
 * @name exports
 * @summary EligibilityResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ELIGIBILITYRESPONSE
	},
	routes
};
