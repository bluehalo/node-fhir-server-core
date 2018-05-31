const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./medication.arguments');
const controller = require('./medication.controller');

let write_only_scopes = write_scopes('Medication');
let read_only_scopes = read_scopes('Medication');

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
		path: '/:version/medication',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedication
	},
	{
		type: 'post',
		path: '/:version/medication/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedication
	},
	{
		type: 'get',
		path: '/:version/medication/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationById
	},
	{
		type: 'post',
		path: '/:version/medication',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedication
	},
	{
		type: 'put',
		path: '/:version/medication/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedication
	},
	{
		type: 'delete',
		path: '/:version/medication/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMedication
	}
];

/**
 * @name exports
 * @summary Medication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATION
	},
	routes
};
