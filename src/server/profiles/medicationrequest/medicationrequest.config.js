const controller = require('./medicationrequest.controller');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');

const scopes = [
	'user/*.*',
	'user/MedicationRequest.*',
	'user/MedicationRequest.read',
	'user/*.read',
	'medicationrequest/*.*',
	'medicationrequest/MedicationRequest.*',
	'medicationrequest/MedicationRequest.read',
	'medicationrequest/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/medicationrequest',
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
			name: 'authoredon',
			type: 'date'
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
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intended-dispenser',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intent',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'medication',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'priority',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'requestor',
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
		controller: controller.getMedicationRequest
	},
	{
		type: 'post',
		path: '/:version/medicationrequest/_search',
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
			name: 'authoredon',
			type: 'date'
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
			name: 'identifier',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intended-dispenser',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'intent',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'medication',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'patient',
			type: 'reference'
		}, {
			versions: [VERSIONS.STU3],
			name: 'priority',
			type: 'token'
		}, {
			versions: [VERSIONS.STU3],
			name: 'requestor',
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
		controller: controller.getMedicationRequest
	},
	{
		type: 'get',
		path: '/:version/medicationrequest/:id',
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
		controller: controller.getMedicationRequestById
	}
];

let codes = {
	gender: ['male', 'female', 'other', 'unknown']
};

/**
 * @name exports
 * @summary MedicationRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes,
	codes
};
