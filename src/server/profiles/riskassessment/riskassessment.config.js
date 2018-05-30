const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./riskassessment.arguments');
const controller = require('./riskassessment.controller');

let write_only_scopes = write_scopes('RiskAssessment');
let read_only_scopes = read_scopes('RiskAssessment');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRiskAssessment
	},
	{
		type: 'post',
		path: '/:version/riskassessment/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRiskAssessment
	},
	{
		type: 'get',
		path: '/:version/riskassessment/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getRiskAssessmentById
	},
	{
		type: 'post',
		path: '/:version/riskassessment',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createRiskAssessment
	},
	{
		type: 'put',
		path: '/:version/riskassessment/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateRiskAssessment
	},
	{
		type: 'delete',
		path: '/:version/riskassessment/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteRiskAssessment
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
