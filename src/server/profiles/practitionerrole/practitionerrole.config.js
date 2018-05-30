const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./practitionerrole.arguments');
const controller = require('./practitionerrole.controller');

let write_only_scopes = write_scopes('PractitionerRole');
let read_only_scopes = read_scopes('PractitionerRole');

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
		path: '/:version/practitionerrole',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPractitionerRole
	},
	{
		type: 'post',
		path: '/:version/practitionerrole/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPractitionerRole
	},
	{
		type: 'get',
		path: '/:version/practitionerrole/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPractitionerRoleById
	},
	{
		type: 'post',
		path: '/:version/practitionerrole',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPractitionerRole
	},
	{
		type: 'put',
		path: '/:version/practitionerrole/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePractitionerRole
	},
	{
		type: 'delete',
		path: '/:version/practitionerrole/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePractitionerRole
	}
];

/**
 * @name exports
 * @summary PractitionerRole config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PRACTITIONERROLE
	},
	routes
};
