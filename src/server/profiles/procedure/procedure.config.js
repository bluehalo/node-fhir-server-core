const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./procedure.arguments');
const controller = require('./procedure.controller');

const scopes = [
	'user/*.*',
	'user/Procedure.*',
	'user/Procedure.read',
	'user/*.read',
	'procedure/*.*',
	'procedure/Procedure.*',
	'procedure/Procedure.read',
	'procedure/*.read'
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
		path: '/:version/procedure',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcedure
	},
	{
		type: 'post',
		path: '/:version/procedure/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcedure
	},
	{
		type: 'get',
		path: '/:version/procedure/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getProcedureById
	}
];

/**
 * @name exports
 * @summary Procedure config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCEDURE
	},
	routes
};
