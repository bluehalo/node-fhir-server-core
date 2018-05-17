const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./immunization.arguments');
const controller = require('./immunization.controller');

const scopes = [
	'user/*.*',
	'user/Immunization.*',
	'user/Immunization.read',
	'user/*.read',
	'immunization/*.*',
	'immunization/Immunization.*',
	'immunization/Immunization.read',
	'immunization/*.read'
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
		path: '/:version/immunization',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImmunization
	},
	{
		type: 'post',
		path: '/:version/immunization/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImmunization
	},
	{
		type: 'get',
		path: '/:version/immunization/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getImmunizationById
	}
];

/**
 * @name exports
 * @summary Immunization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMMUNIZATION
	},
	routes
};
