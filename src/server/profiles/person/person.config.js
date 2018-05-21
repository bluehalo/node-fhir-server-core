const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./person.arguments');
const controller = require('./person.controller');

const scopes = [
	'user/*.*',
	'user/Person.*',
	'user/Person.read',
	'user/*.read',
	'person/*.*',
	'person/Person.*',
	'person/Person.read',
	'person/*.read'
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
		path: '/:version/person',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPerson
	},
	{
		type: 'post',
		path: '/:version/person/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPerson
	},
	{
		type: 'get',
		path: '/:version/person/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPersonById
	}
];

/**
 * @name exports
 * @summary Person config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PERSON
	},
	routes
};
