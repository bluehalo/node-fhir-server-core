const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./measurereport.arguments');
const controller = require('./measurereport.controller');

const scopes = [
	'user/*.*',
	'user/MeasureReport.*',
	'user/MeasureReport.read',
	'user/*.read',
	'measurereport/*.*',
	'measurereport/MeasureReport.*',
	'measurereport/MeasureReport.read',
	'measurereport/*.read'
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
		path: '/:version/measurereport',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMeasureReport
	},
	{
		type: 'post',
		path: '/:version/measurereport/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMeasureReport
	},
	{
		type: 'get',
		path: '/:version/measurereport/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMeasureReportById
	}
];

/**
 * @name exports
 * @summary MeasureReport config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEASUREREPORT
	},
	routes
};
