const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./servicedefinition.arguments');
const controller = require('./servicedefinition.controller');

const scopes = [
	'user/*.*',
	'user/ServiceDefinition.*',
	'user/ServiceDefinition.read',
	'user/*.read',
	'servicedefinition/*.*',
	'servicedefinition/ServiceDefinition.*',
	'servicedefinition/ServiceDefinition.read',
	'servicedefinition/*.read'
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
		path: '/:version/servicedefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getServiceDefinition
	},
	{
		type: 'post',
		path: '/:version/servicedefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getServiceDefinition
	},
	{
		type: 'get',
		path: '/:version/servicedefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getServiceDefinitionById
	}
];

/**
 * @name exports
 * @summary ServiceDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SERVICEDEFINITION
	},
	routes
};
