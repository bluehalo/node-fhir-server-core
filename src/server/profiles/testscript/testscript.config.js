const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./testscript.arguments');
const controller = require('./testscript.controller');

const scopes = [
	'user/*.*',
	'user/TestScript.*',
	'user/TestScript.read',
	'user/*.read',
	'testscript/*.*',
	'testscript/TestScript.*',
	'testscript/TestScript.read',
	'testscript/*.read'
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
		path: '/:version/testscript',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTestScript
	},
	{
		type: 'post',
		path: '/:version/testscript/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getTestScript
	},
	{
		type: 'get',
		path: '/:version/testscript/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getTestScriptById
	}
];

/**
 * @name exports
 * @summary TestScript config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.TESTSCRIPT
	},
	routes
};
