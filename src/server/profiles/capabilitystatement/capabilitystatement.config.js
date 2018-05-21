const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./capabilitystatement.arguments');
const controller = require('./capabilitystatement.controller');

const scopes = [
	'user/*.*',
	'user/CapabilityStatement.*',
	'user/CapabilityStatement.read',
	'user/*.read',
	'capabilitystatement/*.*',
	'capabilitystatement/CapabilityStatement.*',
	'capabilitystatement/CapabilityStatement.read',
	'capabilitystatement/*.read'
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
		path: '/:version/capabilitystatement',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCapabilityStatement
	},
	{
		type: 'post',
		path: '/:version/capabilitystatement/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCapabilityStatement
	},
	{
		type: 'get',
		path: '/:version/capabilitystatement/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCapabilityStatementById
	}
];

/**
 * @name exports
 * @summary CapabilityStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CAPABILITYSTATEMENT
	},
	routes
};
