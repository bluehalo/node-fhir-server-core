const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./activitydefinition.arguments');
const controller = require('./activitydefinition.controller');

const scopes = [
	'user/*.*',
	'user/ActivityDefinition.*',
	'user/ActivityDefinition.read',
	'user/*.read',
	'activitydefinition/*.*',
	'activitydefinition/ActivityDefinition.*',
	'activitydefinition/ActivityDefinition.read',
	'activitydefinition/*.read'
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
		path: '/:version/activitydefinition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getActivityDefinition
	},
	{
		type: 'post',
		path: '/:version/activitydefinition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getActivityDefinition
	},
	{
		type: 'get',
		path: '/:version/activitydefinition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getActivityDefinitionById
	}
];

/**
 * @name exports
 * @summary ActivityDefinition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ACTIVITYDEFINITION
	},
	routes
};
