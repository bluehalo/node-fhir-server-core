const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./structuremap.arguments');
const controller = require('./structuremap.controller');

const scopes = [
	'user/*.*',
	'user/StructureMap.*',
	'user/StructureMap.read',
	'user/*.read',
	'structuremap/*.*',
	'structuremap/StructureMap.*',
	'structuremap/StructureMap.read',
	'structuremap/*.read'
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
		path: '/:version/structuremap',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getStructureMap
	},
	{
		type: 'post',
		path: '/:version/structuremap/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getStructureMap
	},
	{
		type: 'get',
		path: '/:version/structuremap/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getStructureMapById
	}
];

/**
 * @name exports
 * @summary StructureMap config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.STRUCTUREMAP
	},
	routes
};
