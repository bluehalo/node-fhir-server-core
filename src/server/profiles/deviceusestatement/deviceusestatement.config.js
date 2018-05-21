const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./devicestatement.arguments');
const controller = require('./devicestatement.controller');

const scopes = [
	'user/*.*',
	'user/DeviceStatement.*',
	'user/DeviceStatement.read',
	'user/*.read',
	'devicestatement/*.*',
	'devicestatement/DeviceStatement.*',
	'devicestatement/DeviceStatement.read',
	'devicestatement/*.read'
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
		path: '/:version/devicestatement',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceStatement
	},
	{
		type: 'post',
		path: '/:version/devicestatement/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceStatement
	},
	{
		type: 'get',
		path: '/:version/devicestatement/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceStatementById
	}
];

/**
 * @name exports
 * @summary DeviceStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICESTATEMENT
	},
	routes
};
