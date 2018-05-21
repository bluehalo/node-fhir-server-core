const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./list.arguments');
const controller = require('./list.controller');

const scopes = [
	'user/*.*',
	'user/List.*',
	'user/List.read',
	'user/*.read',
	'list/*.*',
	'list/List.*',
	'list/List.read',
	'list/*.read'
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
		path: '/:version/list',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getList
	},
	{
		type: 'post',
		path: '/:version/list/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getList
	},
	{
		type: 'get',
		path: '/:version/list/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getListById
	}
];

/**
 * @name exports
 * @summary List config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.LIST
	},
	routes
};
