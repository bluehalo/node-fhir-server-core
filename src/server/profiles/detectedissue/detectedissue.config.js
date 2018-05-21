const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./detectedissue.arguments');
const controller = require('./detectedissue.controller');

const scopes = [
	'user/*.*',
	'user/DetectedIssue.*',
	'user/DetectedIssue.read',
	'user/*.read',
	'detectedissue/*.*',
	'detectedissue/DetectedIssue.*',
	'detectedissue/DetectedIssue.read',
	'detectedissue/*.read'
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
		path: '/:version/detectedissue',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDetectedIssue
	},
	{
		type: 'post',
		path: '/:version/detectedissue/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDetectedIssue
	},
	{
		type: 'get',
		path: '/:version/detectedissue/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDetectedIssueById
	}
];

/**
 * @name exports
 * @summary DetectedIssue config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DETECTEDISSUE
	},
	routes
};
