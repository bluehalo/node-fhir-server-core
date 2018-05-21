const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./communication.arguments');
const controller = require('./communication.controller');

const scopes = [
	'user/*.*',
	'user/Communication.*',
	'user/Communication.read',
	'user/*.read',
	'communication/*.*',
	'communication/Communication.*',
	'communication/Communication.read',
	'communication/*.read'
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
		path: '/:version/communication',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCommunication
	},
	{
		type: 'post',
		path: '/:version/communication/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCommunication
	},
	{
		type: 'get',
		path: '/:version/communication/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCommunicationById
	}
];

/**
 * @name exports
 * @summary Communication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COMMUNICATION
	},
	routes
};
