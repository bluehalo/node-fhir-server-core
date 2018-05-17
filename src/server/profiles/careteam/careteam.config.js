const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const careteam_args = require('./careteam.arguments');
const controller = require('./careteam.controller');

const scopes = [
	'user/*.*',
	'user/CareTeam.*',
	'user/CareTeam.read',
	'user/*.read',
	'careteam/*.*',
	'careteam/CareTeam.*',
	'careteam/CareTeam.read',
	'careteam/*.read'
];

let commonArgsArray = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resourceArgsArray = Object.getOwnPropertyNames(careteam_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, careteam_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...commonArgsArray, ...resourceArgsArray,
];

let routes = [
	{
		type: 'get',
		path: '/:version/careteam',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'post',
		path: '/:version/careteam/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'get',
		path: '/:version/careteam/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCareTeamById
	}
];

/**
 * @name exports
 * @summary CareTeam config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CARETEAM
	},
	routes
};
