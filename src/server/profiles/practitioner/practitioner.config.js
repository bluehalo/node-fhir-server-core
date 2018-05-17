const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./practitioner.arguments');
const controller = require('./practitioner.controller');

const scopes = [
	'user/*.*',
	'user/Practitioner.*',
	'user/Practitioner.read',
	'user/*.read',
	'practitioner/*.*',
	'practitioner/Practitioner.*',
	'practitioner/Practitioner.read',
	'practitioner/*.read'
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
		path: '/:version/practitioner',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'post',
		path: '/:version/practitioner/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'get',
		path: '/:version/practitioner/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPractitionerById
	}
];

/**
 * @name exports
 * @summary Practitioner config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PRACTITIONER
	},
	routes
};
