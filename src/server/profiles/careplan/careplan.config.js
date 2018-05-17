const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./careplan.arguments');
const controller = require('./careplan.controller');

const scopes = [
	'user/*.*',
	'user/CarePlan.*',
	'user/CarePlan.read',
	'user/*.read',
	'careplan/*.*',
	'careplan/CarePlan.*',
	'careplan/CarePlan.read',
	'careplan/*.read'
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
		path: '/:version/careplan',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'post',
		path: '/:version/careplan/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'get',
		path: '/:version/careplan/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCarePlanById
	}
];

/**
 * @name exports
 * @summary CarePlan config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CAREPLAN
	},
	routes
};
