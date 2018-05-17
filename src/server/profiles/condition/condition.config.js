const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./condition.arguments');
const controller = require('./condition.controller');

const scopes = [
	'user/*.*',
	'user/Condition.*',
	'user/Condition.read',
	'user/*.read',
	'condition/*.*',
	'condition/Condition.*',
	'condition/Condition.read',
	'condition/*.read'
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
		path: '/:version/condition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCondition
	},
	{
		type: 'post',
		path: '/:version/condition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCondition
	},
	{
		type: 'get',
		path: '/:version/condition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getConditionById
	}
];

/**
 * @name exports
 * @summary Condition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONDITION
	},
	routes
};
