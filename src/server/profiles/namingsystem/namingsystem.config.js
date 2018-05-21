const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./namingsystem.arguments');
const controller = require('./namingsystem.controller');

const scopes = [
	'user/*.*',
	'user/NamingSystem.*',
	'user/NamingSystem.read',
	'user/*.read',
	'namingsystem/*.*',
	'namingsystem/NamingSystem.*',
	'namingsystem/NamingSystem.read',
	'namingsystem/*.read'
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
		path: '/:version/namingsystem',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getNamingSystem
	},
	{
		type: 'post',
		path: '/:version/namingsystem/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getNamingSystem
	},
	{
		type: 'get',
		path: '/:version/namingsystem/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getNamingSystemById
	}
];

/**
 * @name exports
 * @summary NamingSystem config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.NAMINGSYSTEM
	},
	routes
};
