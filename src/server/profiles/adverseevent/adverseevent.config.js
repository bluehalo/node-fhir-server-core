const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./adverseevent.arguments');
const controller = require('./adverseevent.controller');

let write_only_scopes = write_scopes('AdverseEvent');
let read_only_scopes = read_scopes('AdverseEvent');

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
		path: '/:version/adverseevent',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAdverseEvent
	},
	{
		type: 'post',
		path: '/:version/adverseevent/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAdverseEvent
	},
	{
		type: 'get',
		path: '/:version/adverseevent/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getAdverseEventById
	},
	{
		type: 'post',
		path: '/:version/adverseevent',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createAdverseEvent
	},
	{
		type: 'put',
		path: '/:version/adverseevent/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateAdverseEvent
	},
	{
		type: 'delete',
		path: '/:version/adverseevent/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteAdverseEvent
	}
];

/**
 * @name exports
 * @summary AdverseEvent config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ADVERSEEVENT
	},
	routes
};
