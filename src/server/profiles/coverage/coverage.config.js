const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./coverage.arguments');
const controller = require('./coverage.controller');

const scopes = [
	'user/*.*',
	'user/Coverage.*',
	'user/Coverage.read',
	'user/*.read',
	'coverage/*.*',
	'coverage/Coverage.*',
	'coverage/Coverage.read',
	'coverage/*.read'
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
		path: '/:version/coverage',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCoverage
	},
	{
		type: 'post',
		path: '/:version/coverage/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCoverage
	},
	{
		type: 'get',
		path: '/:version/coverage/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCoverageById
	}
];

/**
 * @name exports
 * @summary Coverage config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COVERAGE
	},
	routes
};
