const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./organization.arguments');
const controller = require('./organization.controller');

const scopes = [
	'user/*.*',
	'user/Organization.*',
	'user/Organization.read',
	'user/*.read',
	'organization/*.*',
	'organization/Organization.*',
	'organization/Organization.read',
	'organization/*.read'
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
		path: '/:version/organization',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'post',
		path: '/:version/organization/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'get',
		path: '/:version/organization/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getOrganizationById
	}
];

/**
 * @name exports
 * @summary Organization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ORGANIZATION
	},
	routes
};
