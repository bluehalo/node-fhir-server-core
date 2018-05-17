const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./medicationrequest.arguments');
const controller = require('./medicationrequest.controller');

const scopes = [
	'user/*.*',
	'user/MedicationRequest.*',
	'user/MedicationRequest.read',
	'user/*.read',
	'medicationrequest/*.*',
	'medicationrequest/MedicationRequest.*',
	'medicationrequest/MedicationRequest.read',
	'medicationrequest/*.read'
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
		path: '/:version/medicationrequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'post',
		path: '/:version/medicationrequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'get',
		path: '/:version/medicationrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMedicationRequestById
	}
];

/**
 * @name exports
 * @summary MedicationRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONREQUEST
	},
	routes
};
