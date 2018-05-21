const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./appointmentresponse.arguments');
const controller = require('./appointmentresponse.controller');

const scopes = [
	'user/*.*',
	'user/AppointmentResponse.*',
	'user/AppointmentResponse.read',
	'user/*.read',
	'appointmentresponse/*.*',
	'appointmentresponse/AppointmentResponse.*',
	'appointmentresponse/AppointmentResponse.read',
	'appointmentresponse/*.read'
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
		path: '/:version/appointmentresponse',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAppointmentResponse
	},
	{
		type: 'post',
		path: '/:version/appointmentresponse/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAppointmentResponse
	},
	{
		type: 'get',
		path: '/:version/appointmentresponse/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getAppointmentResponseById
	}
];

/**
 * @name exports
 * @summary AppointmentResponse config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.APPOINTMENTRESPONSE
	},
	routes
};
