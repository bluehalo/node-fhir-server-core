const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./flag.arguments');
const controller = require('./flag.controller');

const scopes = [
	'user/*.*',
	'user/Flag.*',
	'user/Flag.read',
	'user/*.read',
	'flag/*.*',
	'flag/Flag.*',
	'flag/Flag.read',
	'flag/*.read'
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
		path: '/:version/flag',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getFlag
	},
	{
		type: 'post',
		path: '/:version/flag/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getFlag
	},
	{
		type: 'get',
		path: '/:version/flag/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getFlagById
	}
];

/**
 * @name exports
 * @summary Flag config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.FLAG
	},
	routes
};
