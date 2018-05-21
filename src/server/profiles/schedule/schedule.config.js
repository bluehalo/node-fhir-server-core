const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./schedule.arguments');
const controller = require('./schedule.controller');

const scopes = [
	'user/*.*',
	'user/Schedule.*',
	'user/Schedule.read',
	'user/*.read',
	'schedule/*.*',
	'schedule/Schedule.*',
	'schedule/Schedule.read',
	'schedule/*.read'
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
		path: '/:version/schedule',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSchedule
	},
	{
		type: 'post',
		path: '/:version/schedule/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSchedule
	},
	{
		type: 'get',
		path: '/:version/schedule/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getScheduleById
	}
];

/**
 * @name exports
 * @summary Schedule config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SCHEDULE
	},
	routes
};
