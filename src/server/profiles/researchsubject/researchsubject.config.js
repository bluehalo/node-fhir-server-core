const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./researchsubject.arguments');
const controller = require('./researchsubject.controller');

let write_only_scopes = write_scopes('ResearchSubject');
let read_only_scopes = read_scopes('ResearchSubject');

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
		path: '/:version/researchsubject',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getResearchSubject
	},
	{
		type: 'post',
		path: '/:version/researchsubject/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getResearchSubject
	},
	{
		type: 'get',
		path: '/:version/researchsubject/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getResearchSubjectById
	},
	{
		type: 'post',
		path: '/:version/researchsubject',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createResearchSubject
	},
	{
		type: 'put',
		path: '/:version/researchsubject/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateResearchSubject
	},
	{
		type: 'delete',
		path: '/:version/researchsubject/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteResearchSubject
	}
];

/**
 * @name exports
 * @summary ResearchSubject config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.RESEARCHSUBJECT
	},
	routes
};
