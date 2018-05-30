const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./contract.arguments');
const controller = require('./contract.controller');

let write_only_scopes = write_scopes('Contract');
let read_only_scopes = read_scopes('Contract');

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
		path: '/:version/contract',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getContract
	},
	{
		type: 'post',
		path: '/:version/contract/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getContract
	},
	{
		type: 'get',
		path: '/:version/contract/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getContractById
	},
	{
		type: 'post',
		path: '/:version/contract',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createContract
	},
	{
		type: 'put',
		path: '/:version/contract/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateContract
	},
	{
		type: 'delete',
		path: '/:version/contract/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteContract
	}
];

/**
 * @name exports
 * @summary Contract config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONTRACT
	},
	routes
};
