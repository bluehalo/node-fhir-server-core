const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./searchparameter.arguments');
const controller = require('./searchparameter.controller');

const scopes = [
	'user/*.*',
	'user/SearchParameter.*',
	'user/SearchParameter.read',
	'user/*.read',
	'searchparameter/*.*',
	'searchparameter/SearchParameter.*',
	'searchparameter/SearchParameter.read',
	'searchparameter/*.read'
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
		path: '/:version/searchparameter',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSearchParameter
	},
	{
		type: 'post',
		path: '/:version/searchparameter/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSearchParameter
	},
	{
		type: 'get',
		path: '/:version/searchparameter/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSearchParameterById
	}
];

/**
 * @name exports
 * @summary SearchParameter config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SEARCHPARAMETER
	},
	routes
};
