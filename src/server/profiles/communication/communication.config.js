const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./communication.arguments');
const controller = require('./communication.controller');

let write_only_scopes = write_scopes('Communication');
let read_only_scopes = read_scopes('Communication');

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
		path: '/:version/communication',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getCommunication
	},
	{
		type: 'post',
		path: '/:version/communication/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getCommunication
	},
	{
		type: 'get',
		path: '/:version/communication/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getCommunicationById
	},
	{
		type: 'post',
		path: '/:version/communication',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createCommunication
	},
	{
		type: 'put',
		path: '/:version/communication/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateCommunication
	},
	{
		type: 'delete',
		path: '/:version/communication/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteCommunication
	}
];

/**
 * @name exports
 * @summary Communication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COMMUNICATION
	},
	routes
};
