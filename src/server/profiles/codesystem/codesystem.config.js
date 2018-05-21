const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./codesystem.arguments');
const controller = require('./codesystem.controller');

const scopes = [
	'user/*.*',
	'user/CodeSystem.*',
	'user/CodeSystem.read',
	'user/*.read',
	'codesystem/*.*',
	'codesystem/CodeSystem.*',
	'codesystem/CodeSystem.read',
	'codesystem/*.read'
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
		path: '/:version/codesystem',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCodeSystem
	},
	{
		type: 'post',
		path: '/:version/codesystem/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCodeSystem
	},
	{
		type: 'get',
		path: '/:version/codesystem/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCodeSystemById
	}
];

/**
 * @name exports
 * @summary CodeSystem config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CODESYSTEM
	},
	routes
};
