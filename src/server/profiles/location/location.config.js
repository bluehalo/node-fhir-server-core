const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./location.arguments');
const controller = require('./location.controller');

const scopes = [
	'user/*.*',
	'user/Location.*',
	'user/Location.read',
	'user/*.read',
	'location/*.*',
	'location/Location.*',
	'location/Location.read',
	'location/*.read'
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
		path: '/:version/location',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLocation
	},
	{
		type: 'post',
		path: '/:version/location/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getLocation
	},
	{
		type: 'get',
		path: '/:version/location/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getLocationById
	}
];

/**
 * @name exports
 * @summary Location config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.LOCATION
	},
	routes
};
