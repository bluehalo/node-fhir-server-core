const controller = require('./organization.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/Organization.*',
	'user/Organization.read',
	'user/*.read',
	'organization/*.*',
	'organization/Organization.*',
	'organization/Organization.read',
	'organization/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/organization',
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
			}, {
				versions: [VERSIONS.STU3],
				name: 'active',
				type: 'token'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address-city',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address-country',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address-postalcode',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address-state',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'address-use',
				type: 'token'
			}, {
				versions: [VERSIONS.STU3],
				name: 'endpoint',
				type: 'reference'
			}, {
				versions: [VERSIONS.STU3],
				name: 'identifier',
				type: 'token'
			}, {
				versions: [VERSIONS.STU3],
				name: 'name',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'partof',
				type: 'reference'
			}, {
				versions: [VERSIONS.STU3],
				name: 'phonetic',
				type: 'string'
			}, {
				versions: [VERSIONS.STU3],
				name: 'type',
				type: 'token'
			}],
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'post',
		path: '/:version/organization/_search',
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
			name: 'active',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-city',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-country',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-postalcode',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-state',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'address-use',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'endpoint',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'name',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'partof',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'phonetic',
			type: 'string'
		}, {
			versions: [VERSIONS.STU3],
			name: 'type',
			type: 'token'
		}],
		scopes: scopes,
		controller: controller.getOrganization
	},
	{
		type: 'get',
		path: '/:version/organization/:id',
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
		controller: controller.getOrganizationById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary Organization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
