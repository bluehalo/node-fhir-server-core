const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./implementationguide.arguments');
const controller = require('./implementationguide.controller');

const scopes = [
	'user/*.*',
	'user/ImplementationGuide.*',
	'user/ImplementationGuide.read',
	'user/*.read',
	'implementationguide/*.*',
	'implementationguide/ImplementationGuide.*',
	'implementationguide/ImplementationGuide.read',
	'implementationguide/*.read'
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
		path: '/:version/implementationguide',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImplementationGuide
	},
	{
		type: 'post',
		path: '/:version/implementationguide/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImplementationGuide
	},
	{
		type: 'get',
		path: '/:version/implementationguide/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getImplementationGuideById
	}
];

/**
 * @name exports
 * @summary ImplementationGuide config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMPLEMENTATIONGUIDE
	},
	routes
};
