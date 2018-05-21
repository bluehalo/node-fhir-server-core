const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./basic.arguments');
const controller = require('./basic.controller');

const scopes = [
	'user/*.*',
	'user/Basic.*',
	'user/Basic.read',
	'user/*.read',
	'basic/*.*',
	'basic/Basic.*',
	'basic/Basic.read',
	'basic/*.read'
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
		path: '/:version/basic',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBasic
	},
	{
		type: 'post',
		path: '/:version/basic/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBasic
	},
	{
		type: 'get',
		path: '/:version/basic/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getBasicById
	}
];

/**
 * @name exports
 * @summary Basic config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BASIC
	},
	routes
};
