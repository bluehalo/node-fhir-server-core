const controller = require('./medicationstatement.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/MedicationStatement.*',
	'user/MedicationStatement.read',
	'user/*.read',
	'medicationstatement/*.*',
	'medicationstatement/MedicationStatement.*',
	'medicationstatement/MedicationStatement.read',
	'medicationstatement/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/medicationstatement',
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
		controller: controller.getMedicationStatement
	},
	{
		type: 'post',
		path: '/:version/medicationstatement/_search',
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
			name: 'effective',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'medication',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'part-of',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'source',
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
		controller: controller.getMedicationStatement
	},
	{
		type: 'get',
		path: '/:version/medicationstatement/:id',
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
		controller: controller.getMedicationStatementById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary MedicationStatement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
