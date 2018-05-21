const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./enrollmentrequest.arguments');
const controller = require('./enrollmentrequest.controller');

const scopes = [
	'user/*.*',
	'user/EnrollmentRequest.*',
	'user/EnrollmentRequest.read',
	'user/*.read',
	'enrollmentrequest/*.*',
	'enrollmentrequest/EnrollmentRequest.*',
	'enrollmentrequest/EnrollmentRequest.read',
	'enrollmentrequest/*.read'
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
		path: '/:version/enrollmentrequest',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEnrollmentRequest
	},
	{
		type: 'post',
		path: '/:version/enrollmentrequest/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getEnrollmentRequest
	},
	{
		type: 'get',
		path: '/:version/enrollmentrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getEnrollmentRequestById
	}
];

/**
 * @name exports
 * @summary EnrollmentRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ENROLLMENTREQUEST
	},
	routes
};
