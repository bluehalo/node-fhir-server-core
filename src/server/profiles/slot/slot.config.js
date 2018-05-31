const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./slot.arguments');
const controller = require('./slot.controller');

let write_only_scopes = write_scopes('Slot');
let read_only_scopes = read_scopes('Slot');

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
		path: '/:version/slot',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSlot
	},
	{
		type: 'post',
		path: '/:version/slot/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getSlot
	},
	{
		type: 'get',
		path: '/:version/slot/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getSlotById
	},
	{
		type: 'post',
		path: '/:version/slot',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createSlot
	},
	{
		type: 'put',
		path: '/:version/slot/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateSlot
	},
	{
		type: 'delete',
		path: '/:version/slot/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteSlot
	}
];

/**
 * @name exports
 * @summary Slot config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SLOT
	},
	routes
};
