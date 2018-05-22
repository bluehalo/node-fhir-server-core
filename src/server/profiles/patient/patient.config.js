const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const patient_args = require('./patient.arguments');
const controller = require('./patient.controller');

let write_only_scopes = write_scopes('Patient');
let read_only_scopes = read_scopes('Patient');

let routes = [
	{
		type: 'get',
		path: '/:version/patient',
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
			Object.assign({versions: VERSIONS.STU3}, patient_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ANIMAL_BREED),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ANIMAL_SPECIES),
			Object.assign({versions: VERSIONS.STU3}, patient_args.BIRTHDATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.DEATH_DATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.DECEASED),
			Object.assign({versions: VERSIONS.STU3}, patient_args.EMAIL),
			Object.assign({versions: VERSIONS.STU3}, patient_args.FAMILY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GENDER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GENERAL_PRACTITIONER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GIVEN),
			Object.assign({versions: VERSIONS.STU3}, patient_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.LANGUAGE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.LINK),
			Object.assign({versions: VERSIONS.STU3}, patient_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, patient_args.PHONE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.PHONETIC),
		],
		scopes: read_only_scopes,
		controller: controller.getPatient
	},
	{
		type: 'post',
		path: '/:version/patient/_search',
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
			Object.assign({versions: VERSIONS.STU3}, patient_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ANIMAL_BREED),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ANIMAL_SPECIES),
			Object.assign({versions: VERSIONS.STU3}, patient_args.BIRTHDATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.DEATH_DATE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.DECEASED),
			Object.assign({versions: VERSIONS.STU3}, patient_args.EMAIL),
			Object.assign({versions: VERSIONS.STU3}, patient_args.FAMILY),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GENDER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GENERAL_PRACTITIONER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.GIVEN),
			Object.assign({versions: VERSIONS.STU3}, patient_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, patient_args.LANGUAGE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.LINK),
			Object.assign({versions: VERSIONS.STU3}, patient_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, patient_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, patient_args.PHONE),
			Object.assign({versions: VERSIONS.STU3}, patient_args.PHONETIC),
		],
		scopes: read_only_scopes,
		controller: controller.getPatient
	},
	{
		type: 'get',
		path: '/:version/patient/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPatientById
	},
	{
		type: 'post',
		path: '/:version/patient',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPatient
	},
	{
		type: 'put',
		path: '/:version/patient/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePatient
	}
];

/**
 * @name exports
 * @summary Patient config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
