const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./testreport.arguments');
const controller = require('./testreport.controller');

const scopes = [
	'user/*.*',
	'user/TestReport.*',
	'user/TestReport.read',
	'user/*.read',
	'testreport/*.*',
	'testreport/TestReport.*',
	'testreport/TestReport.read',
	'testreport/*.read'
];

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
		path: '/:version/testreport',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTestReport
	},
	{
		type: 'post',
		path: '/:version/testreport/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTestReport
	},
	{
		type: 'get',
		path: '/:version/testreport/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getTestReportById
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
