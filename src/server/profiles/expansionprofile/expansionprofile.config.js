const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./expansionprofile.arguments');
const controller = require('./expansionprofile.controller');

const scopes = [
	'user/*.*',
	'user/ExpansionProfile.*',
	'user/ExpansionProfile.read',
	'user/*.read',
	'expansionprofile/*.*',
	'expansionprofile/ExpansionProfile.*',
	'expansionprofile/ExpansionProfile.read',
	'expansionprofile/*.read'
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
		path: '/:version/expansionprofile',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getExpansionProfile
	},
	{
		type: 'post',
		path: '/:version/expansionprofile/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getExpansionProfile
	},
	{
		type: 'get',
		path: '/:version/expansionprofile/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getExpansionProfileById
	}
];

/**
 * @name exports
 * @summary ExpansionProfile config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.EXPANSIONPROFILE
	},
	routes
};
