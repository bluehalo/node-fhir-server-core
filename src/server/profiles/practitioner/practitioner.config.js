const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const practitioner_args = require('./practitioner.arguments');
const controller = require('./practitioner.controller');

const scopes = [
	'user/*.*',
	'user/Practitioner.*',
	'user/Practitioner.read',
	'user/*.read',
	'practitioner/*.*',
	'practitioner/Practitioner.*',
	'practitioner/Practitioner.read',
	'practitioner/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/practitioner',
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
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.COMMUNICATION),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.EMAIL),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.FAMILY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.GENDER),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.GIVEN),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.PHONE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.TELECOM)
		],
		scopes: scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'post',
		path: '/:version/practitioner/_search',
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
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.COMMUNICATION),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.EMAIL),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.FAMILY),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.GENDER),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.GIVEN),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.PHONE),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, practitioner_args.TELECOM)
		],
		scopes: scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'get',
		path: '/:version/practitioner/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPractitionerById
	}
];

/**
 * @name exports
 * @summary Practitioner config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PRACTITIONER
	},
	routes
};
