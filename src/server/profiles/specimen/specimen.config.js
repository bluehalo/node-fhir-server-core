const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./specimen.arguments');
const controller = require('./specimen.controller');

let write_only_scopes = write_scopes('Specimen');
let read_only_scopes = read_scopes('Specimen');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resource_all_arguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/specimen',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getSpecimen
	},
	{
		type: 'post',
		path: '/:version/specimen/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getSpecimen
	},
	{
		type: 'get',
		path: '/:version/specimen/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getSpecimenById
	},
	{
		type: 'post',
		path: '/:version/specimen',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createSpecimen
	},
	{
		type: 'put',
		path: '/:version/specimen/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateSpecimen
	},
	{
		type: 'delete',
		path: '/:version/specimen/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteSpecimen
	}
];

/**
 * @name exports
 * @summary Specimen config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SPECIMEN
	},
	routes
};
