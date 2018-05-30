const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./communicationrequest.arguments');
const controller = require('./communicationrequest.controller');

let write_only_scopes = write_scopes('CommunicationRequest');
let read_only_scopes = read_scopes('CommunicationRequest');

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
		path: '/:version/communicationrequest',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getCommunicationRequest
	},
	{
		type: 'post',
		path: '/:version/communicationrequest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getCommunicationRequest
	},
	{
		type: 'get',
		path: '/:version/communicationrequest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getCommunicationRequestById
	},
	{
		type: 'post',
		path: '/:version/communicationrequest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createCommunicationRequest
	},
	{
		type: 'put',
		path: '/:version/communicationrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateCommunicationRequest
	},
	{
		type: 'delete',
		path: '/:version/communicationrequest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteCommunicationRequest
	}
];

/**
 * @name exports
 * @summary CommunicationRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COMMUNICATIONREQUEST
	},
	routes
};
