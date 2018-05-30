const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./imagingmanifest.arguments');
const controller = require('./imagingmanifest.controller');

let write_only_scopes = write_scopes('ImagingManifest');
let read_only_scopes = read_scopes('ImagingManifest');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getImagingManifest
	},
	{
		type: 'post',
		path: '/:version/imagingmanifest/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getImagingManifest
	},
	{
		type: 'get',
		path: '/:version/imagingmanifest/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getImagingManifestById
	},
	{
		type: 'post',
		path: '/:version/imagingmanifest',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createImagingManifest
	},
	{
		type: 'put',
		path: '/:version/imagingmanifest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateImagingManifest
	},
	{
		type: 'delete',
		path: '/:version/imagingmanifest/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteImagingManifest
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
