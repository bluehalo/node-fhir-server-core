const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./messageheader.arguments');
const controller = require('./messageheader.controller');

let write_only_scopes = write_scopes('MessageHeader');
let read_only_scopes = read_scopes('MessageHeader');

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
		path: '/:version/messageheader',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMessageHeader
	},
	{
		type: 'post',
		path: '/:version/messageheader/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getMessageHeader
	},
	{
		type: 'get',
		path: '/:version/messageheader/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMessageHeaderById
	},
	{
		type: 'post',
		path: '/:version/messageheader',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMessageHeader
	},
	{
		type: 'put',
		path: '/:version/messageheader/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMessageHeader
	},
	{
		type: 'delete',
		path: '/:version/messageheader/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteMessageHeader
	}
];

/**
 * @name exports
 * @summary MessageHeader config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MESSAGEHEADER
	},
	routes
};
