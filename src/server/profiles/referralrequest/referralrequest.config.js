const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./referralrequest.arguments');
const controller = require('./referralrequest.controller');

const scopes = [
	'user/*.*',
	'user/ReferralRequest.*',
	'user/ReferralRequest.read',
	'user/*.read',
	'referralrequest/*.*',
	'referralrequest/ReferralRequest.*',
	'referralrequest/ReferralRequest.read',
	'referralrequest/*.read'
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
		path: '/:version/referralrequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getReferralRequest
	},
	{
		type: 'post',
		path: '/:version/referralrequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getReferralRequest
	},
	{
		type: 'get',
		path: '/:version/referralrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getReferralRequestById
	}
];

/**
 * @name exports
 * @summary ReferralRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.REFERRALREQUEST
	},
	routes
};
