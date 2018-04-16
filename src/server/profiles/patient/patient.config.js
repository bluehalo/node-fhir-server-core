const { route_args, common_args } = require('../common.arguments');
const { CONFIG_KEYS } = require('../../../constants');
const patient_args = require('./patient.arguments');
const controller = require('./patient.controller');

const scopes = [
  'user/*.*',
  'user/Patient.*',
  'user/Patient.read',
  'user/*.read',
  'patient/*.*',
  'patient/Patient.*',
  'patient/Patient.read',
  'patient/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/patient',
		corsOptions: {
			methods: ['GET']
		},
		args: [
			route_args.VERSION,
			patient_args.NAME,
			patient_args.BIRTHDATE,
			patient_args.GENDER,
			patient_args.GIVEN,
			patient_args.FAMILY,
			common_args._FORMAT
		],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'post',
		path: '/:version/patient/_search',
		corsOptions: {
			methods: ['POST']
		},
		args: [
			route_args.VERSION,
			patient_args.NAME,
			patient_args.BIRTHDATE,
			patient_args.GENDER,
			patient_args.GIVEN,
			patient_args.FAMILY,
			common_args._FORMAT
		],
		scopes: scopes,
		controller: controller.getPatient
	},
	{
		type: 'get',
		path: '/:version/patient/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPatientById
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
