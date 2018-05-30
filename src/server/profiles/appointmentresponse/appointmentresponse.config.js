const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./appointmentresponse.arguments');
const controller = require('./appointmentresponse.controller');

let write_only_scopes = write_scopes('AppointmentResponse');
let read_only_scopes = read_scopes('AppointmentResponse');

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
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAppointmentResponse
	},
	{
		type: 'post',
		path: '/:version/appointmentresponse/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getAppointmentResponse
	},
	{
		type: 'get',
		path: '/:version/appointmentresponse/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getAppointmentResponseById
	},
	{
		type: 'post',
		path: '/:version/appointmentresponse',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createAppointmentResponse
	},
	{
		type: 'put',
		path: '/:version/appointmentresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateAppointmentResponse
	},
	{
		type: 'delete',
		path: '/:version/appointmentresponse/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteAppointmentResponse
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
