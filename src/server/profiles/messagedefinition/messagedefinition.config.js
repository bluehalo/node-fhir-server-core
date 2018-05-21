const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./messagedefinition.arguments');
const controller = require('./messagedefinition.controller');

const scopes = [
	'user/*.*',
	'user/MessageDefinition.*',
	'user/MessageDefinition.read',
	'user/*.read',
	'messagedefinition/*.*',
	'messagedefinition/MessageDefinition.*',
	'messagedefinition/MessageDefinition.read',
	'messagedefinition/*.read'
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
		path: '/:version/messagedefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMessageDefinition
	},
	{
		type: 'post',
		path: '/:version/messagedefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMessageDefinition
	},
	{
		type: 'get',
		path: '/:version/messagedefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMessageDefinitionById
	}
];

/**
 * @name exports
 * @summary MessageDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MESSAGEDEFINITION
	},
	routes
};
