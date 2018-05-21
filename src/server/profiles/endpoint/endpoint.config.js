const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./endpoint.arguments');
const controller = require('./endpoint.controller');

const scopes = [
	'user/*.*',
	'user/Endpoint.*',
	'user/Endpoint.read',
	'user/*.read',
	'endpoint/*.*',
	'endpoint/Endpoint.*',
	'endpoint/Endpoint.read',
	'endpoint/*.read'
];

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
		path: '/:version/endpoint',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEndpoint
	},
	{
		type: 'post',
		path: '/:version/endpoint/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEndpoint
	},
	{
		type: 'get',
		path: '/:version/endpoint/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getEndpointById
	}
];

/**
 * @name exports
 * @summary Endpoint config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENDPOINT
	},
	routes
};
