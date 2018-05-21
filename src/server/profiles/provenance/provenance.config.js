const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./provenance.arguments');
const controller = require('./provenance.controller');

const scopes = [
	'user/*.*',
	'user/Provenance.*',
	'user/Provenance.read',
	'user/*.read',
	'provenance/*.*',
	'provenance/Provenance.*',
	'provenance/Provenance.read',
	'provenance/*.read'
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
		path: '/:version/provenance',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProvenance
	},
	{
		type: 'post',
		path: '/:version/provenance/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getProvenance
	},
	{
		type: 'get',
		path: '/:version/provenance/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getProvenanceById
	}
];

/**
 * @name exports
 * @summary Provenance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROVENANCE
	},
	routes
};
