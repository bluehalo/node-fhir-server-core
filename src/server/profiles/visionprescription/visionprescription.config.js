const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./visionprescription.arguments');
const controller = require('./visionprescription.controller');

let write_only_scopes = write_scopes('VisionPrescription');
let read_only_scopes = read_scopes('VisionPrescription');

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
		path: '/:version/visionprescription',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getVisionPrescription
	},
	{
		type: 'post',
		path: '/:version/visionprescription/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getVisionPrescription
	},
	{
		type: 'get',
		path: '/:version/visionprescription/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getVisionPrescriptionById
	},
	{
		type: 'post',
		path: '/:version/visionprescription',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createVisionPrescription
	},
	{
		type: 'put',
		path: '/:version/visionprescription/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateVisionPrescription
	},
	{
		type: 'delete',
		path: '/:version/visionprescription/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteVisionPrescription
	}
];

/**
 * @name exports
 * @summary VisionPrescription config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.VISIONPRESCRIPTION
	},
	routes
};
