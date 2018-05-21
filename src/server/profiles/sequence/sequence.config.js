const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./sequence.arguments');
const controller = require('./sequence.controller');

const scopes = [
	'user/*.*',
	'user/Sequence.*',
	'user/Sequence.read',
	'user/*.read',
	'sequence/*.*',
	'sequence/Sequence.*',
	'sequence/Sequence.read',
	'sequence/*.read'
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
		path: '/:version/sequence',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSequence
	},
	{
		type: 'post',
		path: '/:version/sequence/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSequence
	},
	{
		type: 'get',
		path: '/:version/sequence/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSequenceById
	}
];

/**
 * @name exports
 * @summary Sequence config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SEQUENCE
	},
	routes
};
