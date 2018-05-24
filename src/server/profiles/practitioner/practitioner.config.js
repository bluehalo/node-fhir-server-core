const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const practitioner_args = require('./practitioner.arguments');
const controller = require('./practitioner.controller');

let write_only_scopes = write_scopes('Practitioner');
let read_only_scopes = read_scopes('Practitioner');

let routes = [
	{
		type: 'get',
		path: '/:version/practitioner',
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
		scopes: read_only_scopes,
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
		scopes: read_only_scopes,
		controller: controller.getPractitioner
	},
	{
		type: 'get',
		path: '/:version/practitioner/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPractitionerById
	},
	{
		type: 'post',
		path: '/:version/practitioner',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPractitioner
	},
	{
		type: 'put',
		path: '/:version/practitioner/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePractitioner
	},
	{
		type: 'delete',
		path: '/:version/practitioner/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePractitioner
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
