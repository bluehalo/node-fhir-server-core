const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./valueset.arguments');
const controller = require('./valueset.controller');

const scopes = [
	'user/*.*',
	'user/ValueSet.*',
	'user/ValueSet.read',
	'user/*.read',
	'valueset/*.*',
	'valueset/ValueSet.*',
	'valueset/ValueSet.read',
	'valueset/*.read'
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
		path: '/:version/valueset',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getValueSet
	},
	{
		type: 'post',
		path: '/:version/valueset/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getValueSet
	},
	{
		type: 'get',
		path: '/:version/valueset/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getValueSetById
	}
];

/**
 * @name exports
 * @summary ValueSet config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.VALUESET
	},
	routes
};
