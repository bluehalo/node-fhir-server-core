const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./medicationadministration.arguments');
const controller = require('./medicationadministration.controller');

let write_only_scopes = write_scopes('MedicationAdministration');
let read_only_scopes = read_scopes('MedicationAdministration');

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
		path: '/:version/medicationadministration',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationAdministration
	},
	{
		type: 'post',
		path: '/:version/medicationadministration/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationAdministration
	},
	{
		type: 'get',
		path: '/:version/medicationadministration/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationAdministrationById
	},
	{
		type: 'post',
		path: '/:version/medicationadministration',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedicationAdministration
	},
	{
		type: 'put',
		path: '/:version/medicationadministration/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedicationAdministration
	},
	{
		type: 'delete',
		path: '/:version/medicationadministration/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMedicationAdministration
	}
];

/**
 * @name exports
 * @summary MedicationAdministration config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONADMINISTRATION
	},
	routes
};
