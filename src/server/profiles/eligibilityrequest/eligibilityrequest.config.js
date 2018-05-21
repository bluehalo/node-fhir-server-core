const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./eligibilityrequest.arguments');
const controller = require('./eligibilityrequest.controller');

const scopes = [
	'user/*.*',
	'user/EligibilityRequest.*',
	'user/EligibilityRequest.read',
	'user/*.read',
	'eligibilityrequest/*.*',
	'eligibilityrequest/EligibilityRequest.*',
	'eligibilityrequest/EligibilityRequest.read',
	'eligibilityrequest/*.read'
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
		path: '/:version/eligibilityrequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEligibilityRequest
	},
	{
		type: 'post',
		path: '/:version/eligibilityrequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEligibilityRequest
	},
	{
		type: 'get',
		path: '/:version/eligibilityrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getEligibilityRequestById
	}
];

/**
 * @name exports
 * @summary EligibilityRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ELIGIBILITYREQUEST
	},
	routes
};
