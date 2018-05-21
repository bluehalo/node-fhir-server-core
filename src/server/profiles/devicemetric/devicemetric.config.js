const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./devicemetric.arguments');
const controller = require('./devicemetric.controller');

const scopes = [
	'user/*.*',
	'user/DeviceMetric.*',
	'user/DeviceMetric.read',
	'user/*.read',
	'devicemetric/*.*',
	'devicemetric/DeviceMetric.*',
	'devicemetric/DeviceMetric.read',
	'devicemetric/*.read'
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
		path: '/:version/devicemetric',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceMetric
	},
	{
		type: 'post',
		path: '/:version/devicemetric/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDeviceMetric
	},
	{
		type: 'get',
		path: '/:version/devicemetric/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDeviceMetricById
	}
];

/**
 * @name exports
 * @summary DeviceMetric config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICEMETRIC
	},
	routes
};
