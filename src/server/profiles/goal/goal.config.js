const controller = require('./goal.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Goal.*',
	'user/Goal.read',
	'user/*.read',
	'goal/*.*',
	'goal/Goal.*',
	'goal/Goal.read',
	'goal/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/goal',
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
			name: 'category',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'start-date',
			type: 'date'
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
			name: 'target-date',
			type: 'date'
		}],
		scopes: scopes,
		controller: controller.getGoal
	},
	{
		type: 'post',
		path: '/:version/goal/_search',
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
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'start-date',
			type: 'date'
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
			name: 'target-date',
			type: 'date'
		}],
		scopes: scopes,
		controller: controller.getGoal
	},
	{
		type: 'get',
		path: '/:version/goal/:id',
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
		controller: controller.getGoalById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Goal config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
