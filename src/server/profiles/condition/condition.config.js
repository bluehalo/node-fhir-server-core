const controller = require('./condition.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Condition.*',
	'user/Condition.read',
	'user/*.read',
	'condition/*.*',
	'condition/Condition.*',
	'condition/Condition.read',
	'condition/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/condition',
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
		controller: controller.getCondition
	},
	{
		type: 'post',
		path: '/:version/condition/_search',
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
			name: 'abatement-age',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'abatement-boolean',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'abatement-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'abatement-string',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'asserted-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'asserter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'body-site',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'clinical-status',
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
			name: 'encounter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'evidence',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'evidence-detail',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'onset-age',
			type: 'quantity'
		}, {
			versions: [VERSIONS.STU3],
			name: 'onset-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'onset-info',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'severity',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'stage',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'subject',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'verification-status',
			type: 'token'
		}],
		scopes: scopes,
		controller: controller.getCondition
	},
	{
		type: 'get',
		path: '/:version/condition/:id',
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
		controller: controller.getConditionById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Condition config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
