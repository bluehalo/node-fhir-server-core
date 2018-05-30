const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./medicationdispense.arguments');
const controller = require('./medicationdispense.controller');

let write_only_scopes = write_scopes('MedicationDispense');
let read_only_scopes = read_scopes('MedicationDispense');

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
		path: '/:version/medicationdispense',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationDispense
	},
	{
		type: 'post',
		path: '/:version/medicationdispense/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationDispense
	},
	{
		type: 'get',
		path: '/:version/medicationdispense/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationDispenseById
	},
	{
		type: 'post',
		path: '/:version/medicationdispense',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedicationDispense
	},
	{
		type: 'put',
		path: '/:version/medicationdispense/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedicationDispense
	},
	{
		type: 'delete',
		path: '/:version/medicationdispense/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMedicationDispense
	}
];

/**
 * @name exports
 * @summary MedicationDispense config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONDISPENSE
	},
	routes
};
