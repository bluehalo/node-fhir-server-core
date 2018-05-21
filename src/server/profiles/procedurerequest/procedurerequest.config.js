const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./procedurerequest.arguments');
const controller = require('./procedurerequest.controller');

const scopes = [
	'user/*.*',
	'user/ProcedureRequest.*',
	'user/ProcedureRequest.read',
	'user/*.read',
	'procedurerequest/*.*',
	'procedurerequest/ProcedureRequest.*',
	'procedurerequest/ProcedureRequest.read',
	'procedurerequest/*.read'
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
		path: '/:version/procedurerequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcedureRequest
	},
	{
		type: 'post',
		path: '/:version/procedurerequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcedureRequest
	},
	{
		type: 'get',
		path: '/:version/procedurerequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getProcedureRequestById
	}
];

/**
 * @name exports
 * @summary ProcedureRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCEDUREREQUEST
	},
	routes
};
