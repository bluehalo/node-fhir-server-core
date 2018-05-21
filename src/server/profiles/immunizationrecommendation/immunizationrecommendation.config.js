const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./immunizationrecommendation.arguments');
const controller = require('./immunizationrecommendation.controller');

const scopes = [
	'user/*.*',
	'user/ImmunizationRecommendation.*',
	'user/ImmunizationRecommendation.read',
	'user/*.read',
	'immunizationrecommendation/*.*',
	'immunizationrecommendation/ImmunizationRecommendation.*',
	'immunizationrecommendation/ImmunizationRecommendation.read',
	'immunizationrecommendation/*.read'
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
		path: '/:version/immunizationrecommendation',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImmunizationRecommendation
	},
	{
		type: 'post',
		path: '/:version/immunizationrecommendation/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImmunizationRecommendation
	},
	{
		type: 'get',
		path: '/:version/immunizationrecommendation/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getImmunizationRecommendationById
	}
];

/**
 * @name exports
 * @summary ImmunizationRecommendation config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMMUNIZATIONRECOMMENDATION
	},
	routes
};
