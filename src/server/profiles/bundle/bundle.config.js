const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./bundle.arguments');
const controller = require('./bundle.controller');

const scopes = [
	'user/*.*',
	'user/Bundle.*',
	'user/Bundle.read',
	'user/*.read',
	'bundle/*.*',
	'bundle/Bundle.*',
	'bundle/Bundle.read',
	'bundle/*.read'
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
		path: '/:version/bundle',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBundle
	},
	{
		type: 'post',
		path: '/:version/bundle/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBundle
	},
	{
		type: 'get',
		path: '/:version/bundle/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getBundleById
	}
];

/**
 * @name exports
 * @summary Bundle config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BUNDLE
	},
	routes
};
