const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./supplyrequest.arguments');
const controller = require('./supplyrequest.controller');

let write_only_scopes = write_scopes('SupplyRequest');
let read_only_scopes = read_scopes('SupplyRequest');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/supplyrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSupplyRequest
	},
	{
		type: 'post',
		path: '/:version/supplyrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSupplyRequest
	},
	{
		type: 'get',
		path: '/:version/supplyrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getSupplyRequestById
	},
	{
		type: 'post',
		path: '/:version/supplyrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createSupplyRequest
	},
	{
		type: 'put',
		path: '/:version/supplyrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateSupplyRequest
	},
	{
		type: 'delete',
		path: '/:version/supplyrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteSupplyRequest
	}
];

/**
 * @name exports
 * @summary SupplyRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SUPPLYREQUEST
	},
	routes
};
