const controller = require('./diagnosticreport.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

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
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		},
			{
				name: '_content',
				type: 'string'
			},
			{
				name: '_id',
				type: 'token'
			},
			{
				name: '_lastUpdated',
				type: 'date'
			},
			{
				name: '_profile',
				type: 'uri'
			},
			{
				name: '_query',
				type: 'token'
			},
			{
				name: '_security',
				type: 'token'
			},
			{
				name: '_tag',
				type: 'token'
			},
		
		
		],
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'post',
		path: '/:version/diagnosticreport/_search',
		corsOptions: {
			methods: ['POST']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
			name: '_content',
			type: 'string'
		}, {
			name: '_id',
			type: 'token'
		}, {
			name: '_lastUpdated',
			type: 'date'
		}, {
			name: '_profile',
			type: 'uri'
		}, {
			name: '_query',
			type: 'token'
		}, {
			name: '_security',
			type: 'token'
		}, {
			name: '_tag',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'based-on',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'context',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'diagnosis',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'encounter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'image',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'issued',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'performer',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'result',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'specimen',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'subject',
			type: 'reference'
		}],
		scopes: scopes,
		controller: controller.getDiagnosticReport
	},
	{
		type: 'get',
		path: '/:version/diagnosticreport/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		}, {
			name: 'id',
			type: 'string',
			required: true
		}],
		scopes: scopes,
		controller: controller.getDiagnosticReportById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary DiagnosticReport config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
