const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./nutritionorder.arguments');
const controller = require('./nutritionorder.controller');

let write_only_scopes = write_scopes('NutritionOrder');
let read_only_scopes = read_scopes('NutritionOrder');

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
		path: '/:version/nutritionorder',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getNutritionOrder
	},
	{
		type: 'post',
		path: '/:version/nutritionorder/_search',
		args: resource_all_arguments,
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
