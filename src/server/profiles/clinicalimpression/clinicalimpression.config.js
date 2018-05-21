const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./clinicalimpression.arguments');
const controller = require('./clinicalimpression.controller');

const scopes = [
	'user/*.*',
	'user/ClinicalImpression.*',
	'user/ClinicalImpression.read',
	'user/*.read',
	'clinicalimpression/*.*',
	'clinicalimpression/ClinicalImpression.*',
	'clinicalimpression/ClinicalImpression.read',
	'clinicalimpression/*.read'
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
		path: '/:version/clinicalimpression',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClinicalImpression
	},
	{
		type: 'post',
		path: '/:version/clinicalimpression/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getClinicalImpression
	},
	{
		type: 'get',
		path: '/:version/clinicalimpression/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getClinicalImpressionById
	}
];

/**
 * @name exports
 * @summary ClinicalImpression config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CLINICALIMPRESSION
	},
	routes
};
