const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./questionnaire.arguments');
const controller = require('./questionnaire.controller');

let write_only_scopes = write_scopes('Questionnaire');
let read_only_scopes = read_scopes('Questionnaire');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getQuestionnaire
	},
	{
		type: 'post',
		path: '/:version/questionnaire/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getQuestionnaire
	},
	{
		type: 'get',
		path: '/:version/questionnaire/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getQuestionnaireById
	},
	{
		type: 'post',
		path: '/:version/questionnaire',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createQuestionnaire
	},
	{
		type: 'put',
		path: '/:version/questionnaire/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateQuestionnaire
	},
	{
		type: 'delete',
		path: '/:version/questionnaire/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteQuestionnaire
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
