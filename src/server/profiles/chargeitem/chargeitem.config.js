const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./chargeitem.arguments');
const controller = require('./chargeitem.controller');

let write_only_scopes = write_scopes('ChargeItem');
let read_only_scopes = read_scopes('ChargeItem');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getChargeItem
	},
	{
		type: 'post',
		path: '/:version/chargeitem/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getChargeItem
	},
	{
		type: 'get',
		path: '/:version/chargeitem/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getChargeItemById
	},
	{
		type: 'post',
		path: '/:version/chargeitem',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createChargeItem
	},
	{
		type: 'put',
		path: '/:version/chargeitem/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateChargeItem
	},
	{
		type: 'delete',
		path: '/:version/chargeitem/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteChargeItem
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
