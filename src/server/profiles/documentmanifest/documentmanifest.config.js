const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./documentmanifest.arguments');
const controller = require('./documentmanifest.controller');

const scopes = [
	'user/*.*',
	'user/DocumentManifest.*',
	'user/DocumentManifest.read',
	'user/*.read',
	'documentmanifest/*.*',
	'documentmanifest/DocumentManifest.*',
	'documentmanifest/DocumentManifest.read',
	'documentmanifest/*.read'
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
		path: '/:version/documentmanifest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDocumentManifest
	},
	{
		type: 'post',
		path: '/:version/documentmanifest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDocumentManifest
	},
	{
		type: 'get',
		path: '/:version/documentmanifest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDocumentManifestById
	}
];

/**
 * @name exports
 * @summary DocumentManifest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DOCUMENTMANIFEST
	},
	routes
};
