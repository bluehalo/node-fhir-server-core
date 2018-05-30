const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./relatedperson.arguments');
const controller = require('./relatedperson.controller');

let write_only_scopes = write_scopes('RelatedPerson');
let read_only_scopes = read_scopes('RelatedPerson');

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
		path: '/:version/relatedperson',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRelatedPerson
	},
	{
		type: 'post',
		path: '/:version/relatedperson/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getRelatedPerson
	},
	{
		type: 'get',
		path: '/:version/relatedperson/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getRelatedPersonById
	},
	{
		type: 'post',
		path: '/:version/relatedperson',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createRelatedPerson
	},
	{
		type: 'put',
		path: '/:version/relatedperson/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateRelatedPerson
	},
	{
		type: 'delete',
		path: '/:version/relatedperson/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteRelatedPerson
	}
];

/**
 * @name exports
 * @summary RelatedPerson config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.RELATEDPERSON
	},
	routes
};
