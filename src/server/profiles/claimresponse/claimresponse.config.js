const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./claimresponse.arguments');
const controller = require('./claimresponse.controller');

const scopes = [
	'user/*.*',
	'user/ClaimResponse.*',
	'user/ClaimResponse.read',
	'user/*.read',
	'claimresponse/*.*',
	'claimresponse/ClaimResponse.*',
	'claimresponse/ClaimResponse.read',
	'claimresponse/*.read'
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
		path: '/:version/claimresponse',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClaimResponse
	},
	{
		type: 'post',
		path: '/:version/claimresponse/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClaimResponse
	},
	{
		type: 'get',
		path: '/:version/claimresponse/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getClaimResponseById
	}
];

/**
 * @name exports
 * @summary ClaimResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLAIMRESPONSE
	},
	routes
};
