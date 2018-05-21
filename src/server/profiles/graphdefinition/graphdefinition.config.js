const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./graphdefinition.arguments');
const controller = require('./graphdefinition.controller');

const scopes = [
	'user/*.*',
	'user/GraphDefinition.*',
	'user/GraphDefinition.read',
	'user/*.read',
	'graphdefinition/*.*',
	'graphdefinition/GraphDefinition.*',
	'graphdefinition/GraphDefinition.read',
	'graphdefinition/*.read'
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
		path: '/:version/graphdefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGraphDefinition
	},
	{
		type: 'post',
		path: '/:version/graphdefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGraphDefinition
	},
	{
		type: 'get',
		path: '/:version/graphdefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getGraphDefinitionById
	}
];

/**
 * @name exports
 * @summary GraphDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GRAPHDEFINITION
	},
	routes
};
