const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./researchsubject.arguments');
const controller = require('./researchsubject.controller');

const scopes = [
	'user/*.*',
	'user/ResearchSubject.*',
	'user/ResearchSubject.read',
	'user/*.read',
	'researchsubject/*.*',
	'researchsubject/ResearchSubject.*',
	'researchsubject/ResearchSubject.read',
	'researchsubject/*.read'
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
		path: '/:version/researchsubject',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getResearchSubject
	},
	{
		type: 'post',
		path: '/:version/researchsubject/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getResearchSubject
	},
	{
		type: 'get',
		path: '/:version/researchsubject/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getResearchSubjectById
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
