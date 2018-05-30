const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./explanationofbenefit.arguments');
const controller = require('./explanationofbenefit.controller');

let write_only_scopes = write_scopes('ExplanationOfBenefit');
let read_only_scopes = read_scopes('ExplanationOfBenefit');

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
		path: '/:version/explanationofbenefit',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getExplanationOfBenefit
	},
	{
		type: 'post',
		path: '/:version/explanationofbenefit/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getExplanationOfBenefit
	},
	{
		type: 'get',
		path: '/:version/explanationofbenefit/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getExplanationOfBenefitById
	},
	{
		type: 'post',
		path: '/:version/explanationofbenefit',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createExplanationOfBenefit
	},
	{
		type: 'put',
		path: '/:version/explanationofbenefit/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateExplanationOfBenefit
	},
	{
		type: 'delete',
		path: '/:version/explanationofbenefit/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteExplanationOfBenefit
	}
];

/**
 * @name exports
 * @summary ExplanationOfBenefit config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.EXPLANATIONOFBENEFIT
	},
	routes
};
