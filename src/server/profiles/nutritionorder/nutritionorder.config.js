const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./nutritionorder.arguments');
const controller = require('./nutritionorder.controller');

let write_only_scopes = write_scopes('NutritionOrder');
let read_only_scopes = read_scopes('NutritionOrder');

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
		path: '/:version/nutritionorder',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getNutritionOrder
	},
	{
		type: 'post',
		path: '/:version/nutritionorder/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getNutritionOrder
	},
	{
		type: 'get',
		path: '/:version/nutritionorder/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getNutritionOrderById
	},
	{
		type: 'post',
		path: '/:version/nutritionorder',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createNutritionOrder
	},
	{
		type: 'put',
		path: '/:version/nutritionorder/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateNutritionOrder
	},
	{
		type: 'delete',
		path: '/:version/nutritionorder/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteNutritionOrder
	}
];

/**
 * @name exports
 * @summary NutritionOrder config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.NUTRITIONORDER
	},
	routes
};
