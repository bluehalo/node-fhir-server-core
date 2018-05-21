const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./riskassessment.arguments');
const controller = require('./riskassessment.controller');

const scopes = [
	'user/*.*',
	'user/RiskAssessment.*',
	'user/RiskAssessment.read',
	'user/*.read',
	'riskassessment/*.*',
	'riskassessment/RiskAssessment.*',
	'riskassessment/RiskAssessment.read',
	'riskassessment/*.read'
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
		path: '/:version/riskassessment',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRiskAssessment
	},
	{
		type: 'post',
		path: '/:version/riskassessment/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRiskAssessment
	},
	{
		type: 'get',
		path: '/:version/riskassessment/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getRiskAssessmentById
	}
];

/**
 * @name exports
 * @summary RiskAssessment config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.RISKASSESSMENT
	},
	routes
};
