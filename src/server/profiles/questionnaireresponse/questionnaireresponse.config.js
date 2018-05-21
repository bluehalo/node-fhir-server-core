const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./questionnaireresponse.arguments');
const controller = require('./questionnaireresponse.controller');

const scopes = [
	'user/*.*',
	'user/QuestionnaireResponse.*',
	'user/QuestionnaireResponse.read',
	'user/*.read',
	'questionnaireresponse/*.*',
	'questionnaireresponse/QuestionnaireResponse.*',
	'questionnaireresponse/QuestionnaireResponse.read',
	'questionnaireresponse/*.read'
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
		path: '/:version/questionnaireresponse',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getQuestionnaireResponse
	},
	{
		type: 'post',
		path: '/:version/questionnaireresponse/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getQuestionnaireResponse
	},
	{
		type: 'get',
		path: '/:version/questionnaireresponse/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getQuestionnaireResponseById
	}
];

/**
 * @name exports
 * @summary QuestionnaireResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.QUESTIONNAIRERESPONSE
	},
	routes
};
