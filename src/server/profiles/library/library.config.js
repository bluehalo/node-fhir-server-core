const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./library.arguments');
const controller = require('./library.controller');

const scopes = [
	'user/*.*',
	'user/Library.*',
	'user/Library.read',
	'user/*.read',
	'library/*.*',
	'library/Library.*',
	'library/Library.read',
	'library/*.read'
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
		path: '/:version/library',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLibrary
	},
	{
		type: 'post',
		path: '/:version/library/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLibrary
	},
	{
		type: 'get',
		path: '/:version/library/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getLibraryById
	}
];

/**
 * @name exports
 * @summary Library config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.LIBRARY
	},
	routes
};
