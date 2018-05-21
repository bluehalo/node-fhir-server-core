const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./visionprescription.arguments');
const controller = require('./visionprescription.controller');

const scopes = [
	'user/*.*',
	'user/VisionPrescription.*',
	'user/VisionPrescription.read',
	'user/*.read',
	'visionprescription/*.*',
	'visionprescription/VisionPrescription.*',
	'visionprescription/VisionPrescription.read',
	'visionprescription/*.read'
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
		path: '/:version/visionprescription',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getVisionPrescription
	},
	{
		type: 'post',
		path: '/:version/visionprescription/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getVisionPrescription
	},
	{
		type: 'get',
		path: '/:version/visionprescription/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getVisionPrescriptionById
	}
];

/**
 * @name exports
 * @summary VisionPrescription config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.VISIONPRESCRIPTION
	},
	routes
};
