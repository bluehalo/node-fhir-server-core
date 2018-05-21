const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./substance.arguments');
const controller = require('./substance.controller');

const scopes = [
	'user/*.*',
	'user/Substance.*',
	'user/Substance.read',
	'user/*.read',
	'substance/*.*',
	'substance/Substance.*',
	'substance/Substance.read',
	'substance/*.read'
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
		path: '/:version/substance',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSubstance
	},
	{
		type: 'post',
		path: '/:version/substance/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSubstance
	},
	{
		type: 'get',
		path: '/:version/substance/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSubstanceById
	}
];

/**
 * @name exports
 * @summary Substance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SUBSTANCE
	},
	routes
};
