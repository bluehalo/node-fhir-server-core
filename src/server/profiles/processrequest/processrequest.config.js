const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./processrequest.arguments');
const controller = require('./processrequest.controller');

const scopes = [
	'user/*.*',
	'user/ProcessRequest.*',
	'user/ProcessRequest.read',
	'user/*.read',
	'processrequest/*.*',
	'processrequest/ProcessRequest.*',
	'processrequest/ProcessRequest.read',
	'processrequest/*.read'
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
		path: '/:version/processrequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcessRequest
	},
	{
		type: 'post',
		path: '/:version/processrequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcessRequest
	},
	{
		type: 'get',
		path: '/:version/processrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getProcessRequestById
	}
];

/**
 * @name exports
 * @summary ProcessRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCESSREQUEST
	},
	routes
};
