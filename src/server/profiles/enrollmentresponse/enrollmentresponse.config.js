const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./enrollmentresponse.arguments');
const controller = require('./enrollmentresponse.controller');

const scopes = [
	'user/*.*',
	'user/EnrollmentResponse.*',
	'user/EnrollmentResponse.read',
	'user/*.read',
	'enrollmentresponse/*.*',
	'enrollmentresponse/EnrollmentResponse.*',
	'enrollmentresponse/EnrollmentResponse.read',
	'enrollmentresponse/*.read'
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
		path: '/:version/enrollmentresponse',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEnrollmentResponse
	},
	{
		type: 'post',
		path: '/:version/enrollmentresponse/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEnrollmentResponse
	},
	{
		type: 'get',
		path: '/:version/enrollmentresponse/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getEnrollmentResponseById
	}
];

/**
 * @name exports
 * @summary EnrollmentResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENROLLMENTRESPONSE
	},
	routes
};
