const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./consent.arguments');
const controller = require('./consent.controller');

const scopes = [
	'user/*.*',
	'user/Consent.*',
	'user/Consent.read',
	'user/*.read',
	'consent/*.*',
	'consent/Consent.*',
	'consent/Consent.read',
	'consent/*.read'
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
		path: '/:version/consent',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getConsent
	},
	{
		type: 'post',
		path: '/:version/consent/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getConsent
	},
	{
		type: 'get',
		path: '/:version/consent/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getConsentById
	}
];

/**
 * @name exports
 * @summary Consent config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CONSENT
	},
	routes
};
