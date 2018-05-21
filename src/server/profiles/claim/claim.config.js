const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./claim.arguments');
const controller = require('./claim.controller');

const scopes = [
	'user/*.*',
	'user/Claim.*',
	'user/Claim.read',
	'user/*.read',
	'claim/*.*',
	'claim/Claim.*',
	'claim/Claim.read',
	'claim/*.read'
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
		path: '/:version/claim',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClaim
	},
	{
		type: 'post',
		path: '/:version/claim/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClaim
	},
	{
		type: 'get',
		path: '/:version/claim/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getClaimById
	}
];

/**
 * @name exports
 * @summary Claim config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLAIM
	},
	routes
};
