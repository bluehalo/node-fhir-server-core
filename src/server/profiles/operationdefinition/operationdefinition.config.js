const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./operationdefinition.arguments');
const controller = require('./operationdefinition.controller');

const scopes = [
	'user/*.*',
	'user/OperationDefinition.*',
	'user/OperationDefinition.read',
	'user/*.read',
	'operationdefinition/*.*',
	'operationdefinition/OperationDefinition.*',
	'operationdefinition/OperationDefinition.read',
	'operationdefinition/*.read'
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
		path: '/:version/operationdefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getOperationDefinition
	},
	{
		type: 'post',
		path: '/:version/operationdefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getOperationDefinition
	},
	{
		type: 'get',
		path: '/:version/operationdefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getOperationDefinitionById
	}
];

/**
 * @name exports
 * @summary OperationDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.OPERATIONDEFINITION
	},
	routes
};
