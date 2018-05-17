const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./goal.arguments');
const controller = require('./goal.controller');

const scopes = [
	'user/*.*',
	'user/Goal.*',
	'user/Goal.read',
	'user/*.read',
	'goal/*.*',
	'goal/Goal.*',
	'goal/Goal.read',
	'goal/*.read'
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
		path: '/:version/goal',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGoal
	},
	{
		type: 'post',
		path: '/:version/goal/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGoal
	},
	{
		type: 'get',
		path: '/:version/goal/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getGoalById
	}
];

/**
 * @name exports
 * @summary Goal config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GOAL
	},
	routes
};
