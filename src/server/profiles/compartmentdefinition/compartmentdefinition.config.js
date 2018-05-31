const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./compartmentdefinition.arguments');
const controller = require('./compartmentdefinition.controller');

let write_only_scopes = write_scopes('AllergyIntolerance');
let read_only_scopes = read_scopes('AllergyIntolerance');

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
		path: '/:version/compartmentdefinition',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'post',
		path: '/:version/compartmentdefinition/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'get',
		path: '/:version/compartmentdefinition/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getAllergyIntoleranceById
	},
	{
		type: 'post',
		path: '/:version/compartmentdefinition',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createAllergyIntolerance
	},
	{
		type: 'put',
		path: '/:version/compartmentdefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateAllergyIntolerance
	},
	{
		type: 'delete',
		path: '/:version/compartmentdefinition/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteAllergyIntolerance
	}
];

/**
 * @name exports
 * @summary AllergyIntolerance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ALLERGYINTOLERANCE
	},
	routes
};
