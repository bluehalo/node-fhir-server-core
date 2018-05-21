const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./relatedperson.arguments');
const controller = require('./relatedperson.controller');

const scopes = [
	'user/*.*',
	'user/RelatedPerson.*',
	'user/RelatedPerson.read',
	'user/*.read',
	'relatedperson/*.*',
	'relatedperson/RelatedPerson.*',
	'relatedperson/RelatedPerson.read',
	'relatedperson/*.read'
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
		path: '/:version/relatedperson',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRelatedPerson
	},
	{
		type: 'post',
		path: '/:version/relatedperson/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getRelatedPerson
	},
	{
		type: 'get',
		path: '/:version/relatedperson/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getRelatedPersonById
	}
];

/**
 * @name exports
 * @summary RelatedPerson config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.RELATEDPERSON
	},
	routes
};
