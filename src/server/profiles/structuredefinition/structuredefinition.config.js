const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./structuredefinition.arguments');
const controller = require('./structuredefinition.controller');

const scopes = [
	'user/*.*',
	'user/StructureDefinition.*',
	'user/StructureDefinition.read',
	'user/*.read',
	'structuredefinition/*.*',
	'structuredefinition/StructureDefinition.*',
	'structuredefinition/StructureDefinition.read',
	'structuredefinition/*.read'
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
		path: '/:version/structuredefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getStructureDefinition
	},
	{
		type: 'post',
		path: '/:version/structuredefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getStructureDefinition
	},
	{
		type: 'get',
		path: '/:version/structuredefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getStructureDefinitionById
	}
];

/**
 * @name exports
 * @summary StructureDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.STRUCTUREDEFINITION
	},
	routes
};
