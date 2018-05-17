const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./diagnosticreport.arguments');
const controller = require('./diagnosticreport.controller');

const scopes = [
	'user/*.*',
	'user/DiagnosticReport.*',
	'user/DiagnosticReport.read',
	'user/*.read',
	'diagnosticreport/*.*',
	'diagnosticreport/DiagnosticReport.*',
	'diagnosticreport/DiagnosticReport.read',
	'diagnosticreport/*.read'
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
		path: '/:version/diagnosticreport',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'post',
		path: '/:version/diagnosticreport/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'get',
		path: '/:version/diagnosticreport/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDiagnosticReportById
	}
];

/**
 * @name exports
 * @summary DiagnosticReport config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DIAGNOSTICREPORT
	},
	routes
};
