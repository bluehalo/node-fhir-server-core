const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./media.arguments');
const controller = require('./media.controller');

const scopes = [
	'user/*.*',
	'user/Media.*',
	'user/Media.read',
	'user/*.read',
	'media/*.*',
	'media/Media.*',
	'media/Media.read',
	'media/*.read'
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
		path: '/:version/media',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedia
	},
	{
		type: 'post',
		path: '/:version/media/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMedia
	},
	{
		type: 'get',
		path: '/:version/media/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMediaById
	}
];

/**
 * @name exports
 * @summary Media config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDIA
	},
	routes
};
