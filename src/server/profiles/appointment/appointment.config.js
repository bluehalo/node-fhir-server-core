const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./appointment.arguments');
const controller = require('./appointment.controller');

let write_only_scopes = write_scopes('Appointment');
let read_only_scopes = read_scopes('Appointment');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAppointment
	},
	{
		type: 'post',
		path: '/:version/appointment/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAppointment
	},
	{
		type: 'get',
		path: '/:version/appointment/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getAppointmentById
	},
	{
		type: 'post',
		path: '/:version/appointment',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createAppointment
	},
	{
		type: 'put',
		path: '/:version/appointment/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateAppointment
	},
	{
		type: 'delete',
		path: '/:version/appointment/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteAppointment
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
