const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./researchstudy.arguments');
const controller = require('./researchstudy.controller');

const scopes = [
	'user/*.*',
	'user/ResearchStudy.*',
	'user/ResearchStudy.read',
	'user/*.read',
	'researchstudy/*.*',
	'researchstudy/ResearchStudy.*',
	'researchstudy/ResearchStudy.read',
	'researchstudy/*.read'
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
		path: '/:version/researchstudy',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getResearchStudy
	},
	{
		type: 'post',
		path: '/:version/researchstudy/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getResearchStudy
	},
	{
		type: 'get',
		path: '/:version/researchstudy/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getResearchStudyById
	}
];

/**
 * @name exports
 * @summary ResearchStudy config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.RESEARCHSTUDY
	},
	routes
};
