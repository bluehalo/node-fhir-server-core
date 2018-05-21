const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./processresponse.arguments');
const controller = require('./processresponse.controller');

const scopes = [
	'user/*.*',
	'user/ProcessResponse.*',
	'user/ProcessResponse.read',
	'user/*.read',
	'processresponse/*.*',
	'processresponse/ProcessResponse.*',
	'processresponse/ProcessResponse.read',
	'processresponse/*.read'
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
		path: '/:version/processresponse',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcessResponse
	},
	{
		type: 'post',
		path: '/:version/processresponse/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProcessResponse
	},
	{
		type: 'get',
		path: '/:version/processresponse/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getProcessResponseById
	}
];

/**
 * @name exports
 * @summary ProcessResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCESSRESPONSE
	},
	routes
};
