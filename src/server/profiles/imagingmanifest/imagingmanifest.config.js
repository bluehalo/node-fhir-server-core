const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./imagingmanifest.arguments');
const controller = require('./imagingmanifest.controller');

const scopes = [
	'user/*.*',
	'user/ImagingManifest.*',
	'user/ImagingManifest.read',
	'user/*.read',
	'imagingmanifest/*.*',
	'imagingmanifest/ImagingManifest.*',
	'imagingmanifest/ImagingManifest.read',
	'imagingmanifest/*.read'
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
		path: '/:version/imagingmanifest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImagingManifest
	},
	{
		type: 'post',
		path: '/:version/imagingmanifest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImagingManifest
	},
	{
		type: 'get',
		path: '/:version/imagingmanifest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getImagingManifestById
	}
];

/**
 * @name exports
 * @summary ImagingManifest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMAGINGMANIFEST
	},
	routes
};
