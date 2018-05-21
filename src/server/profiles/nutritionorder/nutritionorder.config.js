const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./nutritionorder.arguments');
const controller = require('./nutritionorder.controller');

const scopes = [
	'user/*.*',
	'user/NutritionOrder.*',
	'user/NutritionOrder.read',
	'user/*.read',
	'nutritionorder/*.*',
	'nutritionorder/NutritionOrder.*',
	'nutritionorder/NutritionOrder.read',
	'nutritionorder/*.read'
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
		path: '/:version/nutritionorder',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getNutritionOrder
	},
	{
		type: 'post',
		path: '/:version/nutritionorder/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getNutritionOrder
	},
	{
		type: 'get',
		path: '/:version/nutritionorder/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getNutritionOrderById
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
