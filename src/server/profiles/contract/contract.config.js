const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./contract.arguments');
const controller = require('./contract.controller');

const scopes = [
	'user/*.*',
	'user/Contract.*',
	'user/Contract.read',
	'user/*.read',
	'contract/*.*',
	'contract/Contract.*',
	'contract/Contract.read',
	'contract/*.read'
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
		path: '/:version/contract',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getContract
	},
	{
		type: 'post',
		path: '/:version/contract/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getContract
	},
	{
		type: 'get',
		path: '/:version/contract/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getContractById
	}
];

/**
 * @name exports
 * @summary Contract config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONTRACT
	},
	routes
};
