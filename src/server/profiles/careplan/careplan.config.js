const controller = require('./careplan.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/CarePlan.*',
	'user/CarePlan.read',
	'user/*.read',
	'careplan/*.*',
	'careplan/CarePlan.*',
	'careplan/CarePlan.read',
	'careplan/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/careplan',
		corsOptions: {
			methods: ['GET']
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
			name: 'activity-code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'activity-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'activity-reference',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'based-on',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'care-team',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'condition',
			type: 'reference'
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
			name: 'definition',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'encounter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'goal',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intent',
			type: 'token'
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
			name: 'performer',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'replaces',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'subject',
			type: 'reference',
		}],
		scopes: scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'post',
		path: '/:version/careplan/_search',
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
			name: 'activity-code',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'activity-date',
			type: 'date'
		}, {
			versions: [VERSIONS.STU3],
			name: 'activity-reference',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'based-on',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'care-team',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'condition',
			type: 'reference'
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
			name: 'definition',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'encounter',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'goal',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intent',
			type: 'token'
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
			name: 'performer',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'replaces',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'status',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'subject',
			type: 'reference',
		}],
		scopes: scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'get',
		path: '/:version/careplan/:id',
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
		controller: controller.getCarePlanById
	}
];

/**
 * @name exports
 * @summary CarePlan config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
