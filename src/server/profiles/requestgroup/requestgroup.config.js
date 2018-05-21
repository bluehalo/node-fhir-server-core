const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./requestgroup.arguments');
const controller = require('./requestgroup.controller');

const scopes = [
	'user/*.*',
	'user/RequestGroup.*',
	'user/RequestGroup.read',
	'user/*.read',
	'requestgroup/*.*',
	'requestgroup/RequestGroup.*',
	'requestgroup/RequestGroup.read',
	'requestgroup/*.read'
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
		path: '/:version/requestgroup',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRequestGroup
	},
	{
		type: 'post',
		path: '/:version/requestgroup/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRequestGroup
	},
	{
		type: 'get',
		path: '/:version/requestgroup/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getRequestGroupById
	}
];

/**
 * @name exports
 * @summary RequestGroup config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.REQUESTGROUP
	},
	routes
};
