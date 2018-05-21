const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./adverseevent.arguments');
const controller = require('./adverseevent.controller');

const scopes = [
	'user/*.*',
	'user/AdverseEvent.*',
	'user/AdverseEvent.read',
	'user/*.read',
	'adverseevent/*.*',
	'adverseevent/AdverseEvent.*',
	'adverseevent/AdverseEvent.read',
	'adverseevent/*.read'
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
		path: '/:version/adverseevent',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAdverseEvent
	},
	{
		type: 'post',
		path: '/:version/adverseevent/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAdverseEvent
	},
	{
		type: 'get',
		path: '/:version/adverseevent/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getAdverseEventById
	}
];

/**
 * @name exports
 * @summary AdverseEvent config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ADVERSEEVENT
	},
	routes
};
