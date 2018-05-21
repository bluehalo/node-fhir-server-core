const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./binary.arguments');
const controller = require('./binary.controller');

const scopes = [
	'user/*.*',
	'user/Binary.*',
	'user/Binary.read',
	'user/*.read',
	'binary/*.*',
	'binary/Binary.*',
	'binary/Binary.read',
	'binary/*.read'
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
		path: '/:version/binary',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBinary
	},
	{
		type: 'post',
		path: '/:version/binary/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBinary
	},
	{
		type: 'get',
		path: '/:version/binary/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getBinaryById
	}
];

/**
 * @name exports
 * @summary Binary config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BINARY
	},
	routes
};
