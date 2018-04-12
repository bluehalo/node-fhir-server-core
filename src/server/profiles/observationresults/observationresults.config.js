const controller = require('./observationresults.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/ObservationResults.*',
	'user/ObservationResults.read',
	'user/*.read',
	'observationresults/*.*',
	'observationresults/ObservationResults.*',
	'observationresults/ObservationResults.read',
	'observationresults/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observationresults',
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
		controller: controller.getObservationResults
	},
	{
		type: 'post',
		path: '/:version/observationresults/_search',
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
			name: 'code-value-concept',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'code-value-date',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'code-value-quantity',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'code-value-string',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-code-value-concept',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-code-value-quantity',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-data-absent-reason',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-value-concept',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'combo-value-quantity',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-code-value-concept',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-code-value-quantity',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-data-absent-reason',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-value-concept',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'component-value-quantity',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'context',
			type: 'reference',
		}, {
			versions: [VERSIONS.STU3],
			name: 'data-absent-reason',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'device',
			type: 'reference'
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
			name: 'method',
			type: 'token'
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
			name: 'related',
			type: 'composite'
		}, {
			versions: [VERSIONS.STU3],
			name: 'related-target',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'related-type',
			type: 'token'
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
		}, {
			versions: [VERSIONS.STU3],
			name: 'value-concept',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'value-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'value-quantity',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'value-string',
			type: 'string'
		}],
		scopes: scopes,
		controller: controller.getObservationResults
	},
	{
		type: 'get',
		path: '/:version/observationresults/:id',
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
		controller: controller.getObservationResultsById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary ObservationResults config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
