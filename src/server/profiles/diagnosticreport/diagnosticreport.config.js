const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const diagnosticreport_args = require('./diagnosticreport.arguments');
const controller = require('./diagnosticreport.controller');


let write_only_scopes = write_scopes('DiagnosticReport');
let read_only_scopes = read_scopes('DiagnosticReport');


let routes = [
	{
		type: 'get',
		path: '/:version/diagnosticreport',
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.DIAGNOSIS),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.IMAGE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.ISSUED),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.RESULT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'post',
		path: '/:version/diagnosticreport/_search',
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.DIAGNOSIS),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.IMAGE),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.ISSUED),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.RESULT),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, diagnosticreport_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'get',
		path: '/:version/diagnosticreport/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDiagnosticReportById
	},
	{
		type: 'post',
		path: '/:version/diagnosticreport',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDiagnosticReport
	},
	{
		type: 'put',
		path: '/:version/diagnosticreport/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDiagnosticReport
	},
	{
		type: 'delete',
		path: '/:version/diagnosticreport/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDiagnosticReport
	}
];

/**
 * @name exports
 * @summary DiagnosticReport config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DIAGNOSTICREPORT
	},
	routes
};
