const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./plandefinition.arguments');
const controller = require('./plandefinition.controller');

const scopes = [
	'user/*.*',
	'user/PlanDefinition.*',
	'user/PlanDefinition.read',
	'user/*.read',
	'plandefinition/*.*',
	'plandefinition/PlanDefinition.*',
	'plandefinition/PlanDefinition.read',
	'plandefinition/*.read'
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
		path: '/:version/plandefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPlanDefinition
	},
	{
		type: 'post',
		path: '/:version/plandefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPlanDefinition
	},
	{
		type: 'get',
		path: '/:version/plandefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPlanDefinitionById
	}
];

/**
 * @name exports
 * @summary PlanDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PLANDEFINITION
	},
	routes
};
