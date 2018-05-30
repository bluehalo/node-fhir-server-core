const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./provenance.arguments');
const controller = require('./provenance.controller');

let write_only_scopes = write_scopes('Provenance');
let read_only_scopes = read_scopes('Provenance');

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
		path: '/:version/provenance',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProvenance
	},
	{
		type: 'post',
		path: '/:version/provenance/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getProvenance
	},
	{
		type: 'get',
		path: '/:version/provenance/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getProvenanceById
	},
	{
		type: 'post',
		path: '/:version/provenance',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createProvenance
	},
	{
		type: 'put',
		path: '/:version/provenance/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateProvenance
	},
	{
		type: 'delete',
		path: '/:version/provenance/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteProvenance
	}
];

/**
 * @name exports
 * @summary Provenance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROVENANCE
	},
	routes
};
