const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./detectedissue.arguments');
const controller = require('./detectedissue.controller');

let write_only_scopes = write_scopes('DetectedIssue');
let read_only_scopes = read_scopes('DetectedIssue');

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
		path: '/:version/detectedissue',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getDetectedIssue
	},
	{
		type: 'post',
		path: '/:version/detectedissue/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getDetectedIssue
	},
	{
		type: 'get',
		path: '/:version/detectedissue/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDetectedIssueById
	},
	{
		type: 'post',
		path: '/:version/detectedissue',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDetectedIssue
	},
	{
		type: 'put',
		path: '/:version/detectedissue/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDetectedIssue
	},
	{
		type: 'delete',
		path: '/:version/detectedissue/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDetectedIssue
	}
];

/**
 * @name exports
 * @summary DetectedIssue config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DETECTEDISSUE
	},
	routes
};