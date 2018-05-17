const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./allergyintolerance.arguments');
const controller = require('./allergyintolerance.controller');

const scopes = [
	'user/*.*',
	'user/AllergyIntolerance.*',
	'user/AllergyIntolerance.read',
	'user/*.read',
	'allergyintolerance/*.*',
	'allergyintolerance/AllergyIntolerance.*',
	'allergyintolerance/AllergyIntolerance.read',
	'allergyintolerance/*.read'
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
		path: '/:version/allergyintolerance',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'post',
		path: '/:version/allergyintolerance/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'get',
		path: '/:version/allergyintolerance/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getAllergyIntoleranceById
	}
];

/**
 * @name exports
 * @summary AllergyIntolerance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ALLERGYINTOLERANCE
	},
	routes
};
