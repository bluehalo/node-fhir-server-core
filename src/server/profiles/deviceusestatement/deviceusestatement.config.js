const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./deviceusestatement.arguments');
const controller = require('./deviceusestatement.controller');

const scopes = [
	'user/*.*',
	'user/DeviceUseStatement.*',
	'user/DeviceUseStatement.read',
	'user/*.read',
	'deviceusestatement/*.*',
	'deviceusestatement/DeviceUseStatement.*',
	'deviceusestatement/DeviceUseStatement.read',
	'deviceusestatement/*.read'
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
		path: '/:version/deviceusestatement',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceUseStatement
	},
	{
		type: 'post',
		path: '/:version/deviceusestatement/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceUseStatement
	},
	{
		type: 'get',
		path: '/:version/deviceusestatement/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceUseStatementById
	}
];

/**
 * @name exports
 * @summary DeviceUseStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICESTATEMENT
	},
	routes
};
