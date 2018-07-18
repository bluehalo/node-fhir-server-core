const { route_args, common_args, write_args, search_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { route_dependencies } = require('../common.dependencies');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./medicationadministration.arguments');
const controller = require('./medicationadministration.controller');

const validationUtils = require('../../utils/validation.utils');

let write_only_scopes = write_scopes('MedicationAdministration');
let read_only_scopes = read_scopes('MedicationAdministration');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

let search_args_array = Object.getOwnPropertyNames(search_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, search_args[arg_name]));

const resource_all_arguments = [
	route_args.BASE,
	...search_args_array,
	...common_args_array,
	...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:base/medicationadministration',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.search,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'post',
		path: '/:base/medicationadministration/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.search,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'get',
		path: '/:base/medicationadministration/_history',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.history,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'get',
		path: '/:base/medicationadministration/:id/_history',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.historyById,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'get',
		path: '/:base/medicationadministration/:id',
		args: [
			route_args.BASE,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.searchById,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'post',
		path: '/:base/medicationadministration',
		args: [
			route_args.BASE,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.create,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'put',
		path: '/:base/medicationadministration/:id',
		args: [
			route_args.ID,
			route_args.BASE,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.update,
		dependencies: [ route_dependencies.SERVICE ]
	},
	{
		type: 'delete',
		path: '/:base/medicationadministration/:id',
		args: [
			route_args.ID,
			route_args.BASE,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.remove,
		dependencies: [ route_dependencies.SERVICE ]
	},
	// ---- Validation ----
	{
		type: 'post',
		path: '/:base/medicationadministration/([\$])validate',
		args: [
			route_args.BASE
		],
		scopes: read_only_scopes,
		controller: validationUtils.validateModel('medicationadministration'),
		dependencies: []
	},
	{
		type: 'post',
		path: '/:base/medicationadministration/:id/([\$])validate',
		args: [
			route_args.BASE,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: validationUtils.validateModelById('medicationadministration'),
		dependencies: [ 'searchById' ]
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
