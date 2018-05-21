const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./group.arguments');
const controller = require('./group.controller');

const scopes = [
	'user/*.*',
	'user/Group.*',
	'user/Group.read',
	'user/*.read',
	'group/*.*',
	'group/Group.*',
	'group/Group.read',
	'group/*.read'
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
		path: '/:version/group',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGroup
	},
	{
		type: 'post',
		path: '/:version/group/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getGroup
	},
	{
		type: 'get',
		path: '/:version/group/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getGroupById
	}
];

/**
 * @name exports
 * @summary Group config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GROUP
	},
	routes
};
