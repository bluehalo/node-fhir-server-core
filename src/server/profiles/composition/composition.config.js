const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./composition.arguments');
const controller = require('./composition.controller');

const scopes = [
	'user/*.*',
	'user/Composition.*',
	'user/Composition.read',
	'user/*.read',
	'composition/*.*',
	'composition/Composition.*',
	'composition/Composition.read',
	'composition/*.read'
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
		path: '/:version/composition',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getComposition
	},
	{
		type: 'post',
		path: '/:version/composition/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getComposition
	},
	{
		type: 'get',
		path: '/:version/composition/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCompositionById
	}
];

/**
 * @name exports
 * @summary Composition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.COMPOSITION
	},
	routes
};
