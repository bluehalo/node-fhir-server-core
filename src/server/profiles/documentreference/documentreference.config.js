const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./documentreference.arguments');
const controller = require('./documentreference.controller');

const scopes = [
	'user/*.*',
	'user/DocumentReference.*',
	'user/DocumentReference.read',
	'user/*.read',
	'documentreference/*.*',
	'documentreference/DocumentReference.*',
	'documentreference/DocumentReference.read',
	'documentreference/*.read'
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
		path: '/:version/documentreference',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDocumentReference
	},
	{
		type: 'post',
		path: '/:version/documentreference/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDocumentReference
	},
	{
		type: 'get',
		path: '/:version/documentreference/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDocumentReferenceById
	}
];

/**
 * @name exports
 * @summary DocumentReference config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DOCUMENTREFERENCE
	},
	routes
};
