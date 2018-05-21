const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./imagingstudy.arguments');
const controller = require('./imagingstudy.controller');

const scopes = [
	'user/*.*',
	'user/ImagingStudy.*',
	'user/ImagingStudy.read',
	'user/*.read',
	'imagingstudy/*.*',
	'imagingstudy/ImagingStudy.*',
	'imagingstudy/ImagingStudy.read',
	'imagingstudy/*.read'
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
		path: '/:version/imagingstudy',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImagingStudy
	},
	{
		type: 'post',
		path: '/:version/imagingstudy/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getImagingStudy
	},
	{
		type: 'get',
		path: '/:version/imagingstudy/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getImagingStudyById
	}
];

/**
 * @name exports
 * @summary ImagingStudy config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMAGINGSTUDY
	},
	routes
};
