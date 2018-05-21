const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./chargeitem.arguments');
const controller = require('./chargeitem.controller');

const scopes = [
	'user/*.*',
	'user/ChargeItem.*',
	'user/ChargeItem.read',
	'user/*.read',
	'chargeitem/*.*',
	'chargeitem/ChargeItem.*',
	'chargeitem/ChargeItem.read',
	'chargeitem/*.read'
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
		path: '/:version/chargeitem',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getChargeItem
	},
	{
		type: 'post',
		path: '/:version/chargeitem/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getChargeItem
	},
	{
		type: 'get',
		path: '/:version/chargeitem/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getChargeItemById
	}
];

/**
 * @name exports
 * @summary ChargeItem config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CHARGEITEM
	},
	routes
};
