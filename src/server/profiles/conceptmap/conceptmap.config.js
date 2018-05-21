const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./conceptmap.arguments');
const controller = require('./conceptmap.controller');

const scopes = [
	'user/*.*',
	'user/ConceptMap.*',
	'user/ConceptMap.read',
	'user/*.read',
	'conceptmap/*.*',
	'conceptmap/ConceptMap.*',
	'conceptmap/ConceptMap.read',
	'conceptmap/*.read'
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
		path: '/:version/conceptmap',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getConceptMap
	},
	{
		type: 'post',
		path: '/:version/conceptmap/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getConceptMap
	},
	{
		type: 'get',
		path: '/:version/conceptmap/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getConceptMapById
	}
];

/**
 * @name exports
 * @summary ConceptMap config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONCEPTMAP
	},
	routes
};
