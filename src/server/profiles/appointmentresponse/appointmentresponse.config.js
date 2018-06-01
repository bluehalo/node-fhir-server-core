const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./appointmentresponse.arguments');
const controller = require('./appointmentresponse.controller');

let write_only_scopes = write_scopes('AppointmentResponse');
let read_only_scopes = read_scopes('AppointmentResponse');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resource_all_arguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/appointmentresponse',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getAppointmentResponse
	},
	{
		type: 'post',
		path: '/:version/appointmentresponse/_search',
		args: resource_all_arguments,
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
