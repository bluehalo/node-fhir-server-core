const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./compartmentdefinition.arguments');
const controller = require('./compartmentdefinition.controller');

const scopes = [
	'user/*.*',
	'user/CompartmentDefinition.*',
	'user/CompartmentDefinition.read',
	'user/*.read',
	'compartmentdefinition/*.*',
	'compartmentdefinition/CompartmentDefinition.*',
	'compartmentdefinition/CompartmentDefinition.read',
	'compartmentdefinition/*.read'
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
		path: '/:version/compartmentdefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCompartmentDefinition
	},
	{
		type: 'post',
		path: '/:version/compartmentdefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCompartmentDefinition
	},
	{
		type: 'get',
		path: '/:version/compartmentdefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCompartmentDefinitionById
	}
];

/**
 * @name exports
 * @summary CompartmentDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COMPARTMENTDEFINITION
	},
	routes
};
