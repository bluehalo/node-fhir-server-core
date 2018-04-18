const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const diagnosticreport_args = require('./diagnosticreport.arguments');
const controller = require('./diagnosticreport.controller');

const scopes = [
	'user/*.*',
	'user/DiagnosticReport.*',
	'user/DiagnosticReport.read',
	'user/*.read',
	'diagnosticreport/*.*',
	'diagnosticreport/DiagnosticReport.*',
	'diagnosticreport/DiagnosticReport.read',
	'diagnosticreport/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/diagnosticreport',
		corsOptions: {methods: ['GET']},
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
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'post',
		path: '/:version/diagnosticreport/_search',
		corsOptions: {methods: ['POST']},
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
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'get',
		path: '/:version/diagnosticreport/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDiagnosticReportById
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
