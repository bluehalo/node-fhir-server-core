const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./subscription.arguments');
const controller = require('./subscription.controller');

const scopes = [
	'user/*.*',
	'user/Subscription.*',
	'user/Subscription.read',
	'user/*.read',
	'subscription/*.*',
	'subscription/Subscription.*',
	'subscription/Subscription.read',
	'subscription/*.read'
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
		path: '/:version/subscription',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSubscription
	},
	{
		type: 'post',
		path: '/:version/subscription/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSubscription
	},
	{
		type: 'get',
		path: '/:version/subscription/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSubscriptionById
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
