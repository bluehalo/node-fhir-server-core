const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./medicationdispense.arguments');
const controller = require('./medicationdispense.controller');

const scopes = [
	'user/*.*',
	'user/MedicationDispense.*',
	'user/MedicationDispense.read',
	'user/*.read',
	'medicationdispense/*.*',
	'medicationdispense/MedicationDispense.*',
	'medicationdispense/MedicationDispense.read',
	'medicationdispense/*.read'
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
		path: '/:version/medicationdispense',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationDispense
	},
	{
		type: 'post',
		path: '/:version/medicationdispense/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedicationDispense
	},
	{
		type: 'get',
		path: '/:version/medicationdispense/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMedicationDispenseById
	}
];

/**
 * @name exports
 * @summary MedicationDispense config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ACTIVITYDEFINITION
	},
	routes
};
