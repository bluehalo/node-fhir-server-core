const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./account.arguments');
const controller = require('./account.controller');

const scopes = [
	'user/*.*',
	'user/Account.*',
	'user/Account.read',
	'user/*.read',
	'account/*.*',
	'account/Account.*',
	'account/Account.read',
	'account/*.read'
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
		path: '/:version/account',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAccount
	},
	{
		type: 'post',
		path: '/:version/account/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAccount
	},
	{
		type: 'get',
		path: '/:version/account/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getAccountById
	}
];

/**
 * @name exports
 * @summary Account config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ACCOUNT
	},
	routes
};
