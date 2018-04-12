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
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
		}, {
			versions: [VERSIONS.STU3],
			name: '',
			type: '',
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
