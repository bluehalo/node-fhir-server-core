const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./task.arguments');
const controller = require('./task.controller');

const scopes = [
	'user/*.*',
	'user/Task.*',
	'user/Task.read',
	'user/*.read',
	'task/*.*',
	'task/Task.*',
	'task/Task.read',
	'task/*.read'
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
		path: '/:version/task',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTask
	},
	{
		type: 'post',
		path: '/:version/task/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTask
	},
	{
		type: 'get',
		path: '/:version/task/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getTaskById
	}
];

/**
 * @name exports
 * @summary Task config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.TASK
	},
	routes
};
