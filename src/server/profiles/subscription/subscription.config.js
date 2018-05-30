const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./subscription.arguments');
const controller = require('./subscription.controller');

let write_only_scopes = write_scopes('Subscription');
let read_only_scopes = read_scopes('Subscription');

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
		path: '/:version/subscription',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSubscription
	},
	{
		type: 'post',
		path: '/:version/subscription/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSubscription
	},
	{
		type: 'get',
		path: '/:version/subscription/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getSubscriptionById
	},
	{
		type: 'post',
		path: '/:version/subscription',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createSubscription
	},
	{
		type: 'put',
		path: '/:version/subscription/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateSubscription
	},
	{
		type: 'delete',
		path: '/:version/subscription/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteSubscription
	}
];

/**
 * @name exports
 * @summary Subscription config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SUBSCRIPTION
	},
	routes
};
