const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./measure.arguments');
const controller = require('./measure.controller');

const scopes = [
	'user/*.*',
	'user/Measure.*',
	'user/Measure.read',
	'user/*.read',
	'measure/*.*',
	'measure/Measure.*',
	'measure/Measure.read',
	'measure/*.read'
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
		path: '/:version/measure',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMeasure
	},
	{
		type: 'post',
		path: '/:version/measure/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getMeasure
	},
	{
		type: 'get',
		path: '/:version/measure/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMeasureById
	}
];

/**
 * @name exports
 * @summary Measure config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEASURE
	},
	routes
};
