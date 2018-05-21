const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./medicationadministration.arguments');
const controller = require('./medicationadministration.controller');

const scopes = [
	'user/*.*',
	'user/MedicationAdministration.*',
	'user/MedicationAdministration.read',
	'user/*.read',
	'medicationadministration/*.*',
	'medicationadministration/MedicationAdministration.*',
	'medicationadministration/MedicationAdministration.read',
	'medicationadministration/*.read'
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
		path: '/:version/medicationadministration',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationAdministration
	},
	{
		type: 'post',
		path: '/:version/medicationadministration/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationAdministration
	},
	{
		type: 'get',
		path: '/:version/medicationadministration/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMedicationAdministrationById
	}
];

/**
 * @name exports
 * @summary MedicationAdministration config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONADMINISTRATION
	},
	routes
};
