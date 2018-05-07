const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const medicationrequest_args = require('./medicationrequest.arguments');
const controller = require('./medicationrequest.controller');

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
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.AUTHOREDON),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.INTENDED_DISPENSER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.INTENT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.MEDICATION),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.PRIORITY),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.REQUESTER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.SUBJECT)
		],
		scopes: scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'post',
		path: '/:version/medicationrequest/_search',
		corsOptions: {methods: ['POST']},
		args: [
			route_args.VERSION,
			common_args._FORMAT,
			common_args._CONTENT,
			common_args._ID,
			common_args._LASTUPDATED,
			common_args._PROFILE,
			common_args._QUERY,
			common_args._SECURITY,
			common_args._TAG,
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.AUTHOREDON),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.INTENDED_DISPENSER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.INTENT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.MEDICATION),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.PRIORITY),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.REQUESTER),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, medicationrequest_args.SUBJECT)
		],
		scopes: scopes,
		controller: controller.getMedicationRequest
	},
	{
		type: 'get',
		path: '/:version/medicationrequest/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getMedicationRequestById
	}
];

/**
 * @name exports
 * @summary MedicationRequest config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATIONREQUEST
	},
	routes
};
