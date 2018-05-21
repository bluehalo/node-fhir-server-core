const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./appointment.arguments');
const controller = require('./appointment.controller');

const scopes = [
	'user/*.*',
	'user/Appointment.*',
	'user/Appointment.read',
	'user/*.read',
	'appointment/*.*',
	'appointment/Appointment.*',
	'appointment/Appointment.read',
	'appointment/*.read'
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
		path: '/:version/appointment',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAppointment
	},
	{
		type: 'post',
		path: '/:version/appointment/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getAppointment
	},
	{
		type: 'get',
		path: '/:version/appointment/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getAppointmentById
	}
];

/**
 * @name exports
 * @summary Appointment config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.APPOINTMENT
	},
	routes
};
