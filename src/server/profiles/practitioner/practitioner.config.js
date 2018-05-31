const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./practitioner.arguments');
const controller = require('./practitioner.controller');

let write_only_scopes = write_scopes('Practitioner');
let read_only_scopes = read_scopes('Practitioner');

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
		path: '/:version/practitioner',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'post',
		path: '/:version/practitioner/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'get',
		path: '/:version/practitioner/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPractitionerById
	},
	{
		type: 'post',
		path: '/:version/practitioner',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPractitioner
	},
	{
		type: 'put',
		path: '/:version/practitioner/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePractitioner
	},
	{
		type: 'delete',
		path: '/:version/practitioner/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePractitioner
	}
];

/**
 * @name exports
 * @summary Practitioner config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PRACTITIONER
	},
	routes
};
