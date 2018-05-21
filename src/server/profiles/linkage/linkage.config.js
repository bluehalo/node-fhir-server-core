const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./linkage.arguments');
const controller = require('./linkage.controller');

const scopes = [
	'user/*.*',
	'user/Linkage.*',
	'user/Linkage.read',
	'user/*.read',
	'linkage/*.*',
	'linkage/Linkage.*',
	'linkage/Linkage.read',
	'linkage/*.read'
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
		path: '/:version/linkage',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLinkage
	},
	{
		type: 'post',
		path: '/:version/linkage/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLinkage
	},
	{
		type: 'get',
		path: '/:version/linkage/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getLinkageById
	}
];

/**
 * @name exports
 * @summary Linkage config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.LINKAGE
	},
	routes
};
