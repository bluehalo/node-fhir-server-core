const controller = require('./careteam.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/CareTeam.*',
	'user/CareTeam.read',
	'user/*.read',
	'careteam/*.*',
	'careteam/CareTeam.*',
	'careteam/CareTeam.read',
	'careteam/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/careteam',
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
			name: 'context',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'date',
			type: 'date'
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
			name: 'participant',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
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
		controller: controller.getCareTeam
	},
	{
		type: 'post',
		path: '/:version/careteam/_search',
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
			name: 'context',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'date',
			type: 'date'
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
			name: 'participant',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
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
		controller: controller.getCareTeam
	},
	{
		type: 'get',
		path: '/:version/careteam/:id',
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
		controller: controller.getCareTeamById
	}
];

/**
 * @name exports
 * @summary CareTeam config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
