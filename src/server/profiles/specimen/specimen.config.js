const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./specimen.arguments');
const controller = require('./specimen.controller');

const scopes = [
	'user/*.*',
	'user/Specimen.*',
	'user/Specimen.read',
	'user/*.read',
	'specimen/*.*',
	'specimen/Specimen.*',
	'specimen/Specimen.read',
	'specimen/*.read'
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
		path: '/:version/specimen',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSpecimen
	},
	{
		type: 'post',
		path: '/:version/specimen/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSpecimen
	},
	{
		type: 'get',
		path: '/:version/specimen/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSpecimenById
	}
];

/**
 * @name exports
 * @summary Specimen config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SPECIMEN
	},
	routes
};
