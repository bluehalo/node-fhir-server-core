const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./medicationrequest.arguments');
const controller = require('./medicationrequest.controller');

let write_only_scopes = write_scopes('MedicationRequest');
let read_only_scopes = read_scopes('MedicationRequest');

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
		path: '/:version/medicationrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'post',
		path: '/:version/medicationrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'get',
		path: '/:version/medicationrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationRequestById
	},
	{
		type: 'post',
		path: '/:version/medicationrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedicationRequest
	},
	{
		type: 'put',
		path: '/:version/medicationrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedicationRequest
	},
	{
		type: 'delete',
		path: '/:version/medicationrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMedicationRequest
	}
];

/**
 * @name exports
 * @summary MedicationRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONREQUEST
	},
	routes
};
