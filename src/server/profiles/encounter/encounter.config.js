const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./encounter.arguments');
const controller = require('./encounter.controller');

const scopes = [
	'user/*.*',
	'user/Encounter.*',
	'user/Encounter.read',
	'user/*.read',
	'encounter/*.*',
	'encounter/Encounter.*',
	'encounter/Encounter.read',
	'encounter/*.read'
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
		path: '/:version/encounter',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEncounter
	},
	{
		type: 'post',
		path: '/:version/encounter/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEncounter
	},
	{
		type: 'get',
		path: '/:version/encounter/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getEncounterById
	}
];

/**
 * @name exports
 * @summary Encounter config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENCOUNTER
	},
	routes
};
