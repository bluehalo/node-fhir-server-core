const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./clinicalimpression.arguments');
const controller = require('./clinicalimpression.controller');

let write_only_scopes = write_scopes('ClinicalImpression');
let read_only_scopes = read_scopes('ClinicalImpression');

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
		path: '/:version/clinicalimpression',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClinicalImpression
	},
	{
		type: 'post',
		path: '/:version/clinicalimpression/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getClinicalImpression
	},
	{
		type: 'get',
		path: '/:version/clinicalimpression/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getClinicalImpressionById
	},
	{
		type: 'post',
		path: '/:version/clinicalimpression',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createClinicalImpression
	},
	{
		type: 'put',
		path: '/:version/clinicalimpression/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateClinicalImpression
	},
	{
		type: 'delete',
		path: '/:version/clinicalimpression/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteClinicalImpression
	}
];

/**
 * @name exports
 * @summary ClinicalImpression config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLINICALIMPRESSION
	},
	routes
};
