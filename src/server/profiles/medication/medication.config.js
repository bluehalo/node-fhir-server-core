const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./medication.arguments');
const controller = require('./medication.controller');

const scopes = [
	'user/*.*',
	'user/Medication.*',
	'user/Medication.read',
	'user/*.read',
	'medication/*.*',
	'medication/Medication.*',
	'medication/Medication.read',
	'medication/*.read'
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
		path: '/:version/medication',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedication
	},
	{
		type: 'post',
		path: '/:version/medication/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedication
	},
	{
		type: 'get',
		path: '/:version/medication/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMedicationById
	}
];

/**
 * @name exports
 * @summary Medication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATION
	},
	routes
};
