const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./testreport.arguments');
const controller = require('./testreport.controller');

let write_only_scopes = write_scopes('TestReport');
let read_only_scopes = read_scopes('TestReport');

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
		path: '/:version/testreport',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getTestReport
	},
	{
		type: 'post',
		path: '/:version/testreport/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getTestReport
	},
	{
		type: 'get',
		path: '/:version/testreport/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getTestReportById
	},
	{
		type: 'post',
		path: '/:version/testreport',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createTestReport
	},
	{
		type: 'put',
		path: '/:version/testreport/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateTestReport
	},
	{
		type: 'delete',
		path: '/:version/testreport/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteTestReport
	}
];

/**
 * @name exports
 * @summary TestReport config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.TESTREPORT
	},
	routes
};
