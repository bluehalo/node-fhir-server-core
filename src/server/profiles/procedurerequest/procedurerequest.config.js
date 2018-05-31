const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./procedurerequest.arguments');
const controller = require('./procedurerequest.controller');

let write_only_scopes = write_scopes('ProcedureRequest');
let read_only_scopes = read_scopes('ProcedureRequest');

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
		path: '/:version/procedurerequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProcedureRequest
	},
	{
		type: 'post',
		path: '/:version/procedurerequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProcedureRequest
	},
	{
		type: 'get',
		path: '/:version/procedurerequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getProcedureRequestById
	},
	{
		type: 'post',
		path: '/:version/procedurerequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createProcedureRequest
	},
	{
		type: 'put',
		path: '/:version/procedurerequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateProcedureRequest
	},
	{
		type: 'delete',
		path: '/:version/procedurerequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteProcedureRequest
	}
];

/**
 * @name exports
 * @summary ProcedureRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCEDUREREQUEST
	},
	routes
};
