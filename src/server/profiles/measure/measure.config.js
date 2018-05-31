const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./measure.arguments');
const controller = require('./measure.controller');

let write_only_scopes = write_scopes('Measure');
let read_only_scopes = read_scopes('Measure');

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
		path: '/:version/measure',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMeasure
	},
	{
		type: 'post',
		path: '/:version/measure/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMeasure
	},
	{
		type: 'get',
		path: '/:version/measure/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMeasureById
	},
	{
		type: 'post',
		path: '/:version/measure',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMeasure
	},
	{
		type: 'put',
		path: '/:version/measure/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMeasure
	},
	{
		type: 'delete',
		path: '/:version/measure/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMeasure
	}
];

/**
 * @name exports
 * @summary Measure config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEASURE
	},
	routes
};
