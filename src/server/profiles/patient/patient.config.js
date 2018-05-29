const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./patient.arguments');
const controller = require('./patient.controller');

let write_only_scopes = write_scopes('Patient');
let read_only_scopes = read_scopes('Patient');

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
		path: '/:version/patient',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPatient
	},
	{
		type: 'post',
		path: '/:version/patient/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPatient
	},
	{
		type: 'get',
		path: '/:version/patient/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPatientById
	},
	{
		type: 'post',
		path: '/:version/patient',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPatient
	},
	{
		type: 'put',
		path: '/:version/patient/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePatient
	},
	{
		type: 'delete',
		path: '/:version/patient/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePatient
	}
];

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
