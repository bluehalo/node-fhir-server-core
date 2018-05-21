const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./bodysite.arguments');
const controller = require('./bodysite.controller');

const scopes = [
	'user/*.*',
	'user/BodySite.*',
	'user/BodySite.read',
	'user/*.read',
	'bodysite/*.*',
	'bodysite/BodySite.*',
	'bodysite/BodySite.read',
	'bodysite/*.read'
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
		path: '/:version/bodysite',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBodySite
	},
	{
		type: 'post',
		path: '/:version/bodysite/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getBodySite
	},
	{
		type: 'get',
		path: '/:version/bodysite/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getBodySiteById
	}
];

/**
 * @name exports
 * @summary BodySite config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BODYSITE
	},
	routes
};
