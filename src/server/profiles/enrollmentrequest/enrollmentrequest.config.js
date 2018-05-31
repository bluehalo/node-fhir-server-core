const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./enrollmentrequest.arguments');
const controller = require('./enrollmentrequest.controller');

let write_only_scopes = write_scopes('EnrollmentRequest');
let read_only_scopes = read_scopes('EnrollmentRequest');

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
		path: '/:version/enrollmentrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEnrollmentRequest
	},
	{
		type: 'post',
		path: '/:version/enrollmentrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getEnrollmentRequest
	},
	{
		type: 'get',
		path: '/:version/enrollmentrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getEnrollmentRequestById
	},
	{
		type: 'post',
		path: '/:version/enrollmentrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createEnrollmentRequest
	},
	{
		type: 'put',
		path: '/:version/enrollmentrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateEnrollmentRequest
	},
	{
		type: 'delete',
		path: '/:version/enrollmentrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteEnrollmentRequest
	}
];

/**
 * @name exports
 * @summary EnrollmentRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENROLLMENTREQUEST
	},
	routes
};
