const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./questionnaire.arguments');
const controller = require('./questionnaire.controller');

const scopes = [
	'user/*.*',
	'user/Questionnaire.*',
	'user/Questionnaire.read',
	'user/*.read',
	'questionnaire/*.*',
	'questionnaire/Questionnaire.*',
	'questionnaire/Questionnaire.read',
	'questionnaire/*.read'
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
		path: '/:version/questionnaire',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getQuestionnaire
	},
	{
		type: 'post',
		path: '/:version/questionnaire/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getQuestionnaire
	},
	{
		type: 'get',
		path: '/:version/questionnaire/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getQuestionnaireById
	}
];

/**
 * @name exports
 * @summary Questionnaire config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.QUESTIONNAIRE
	},
	routes
};
