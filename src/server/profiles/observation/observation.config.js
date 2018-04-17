const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const observation_args = require('./observation.arguments');
const controller = require('./observation.controller');

const scopes = [
	'user/*.*',
	'user/Observation.*',
	'user/Observation.read',
	'user/*.read',
	'observation/*.*',
	'observation/Observation.*',
	'observation/Observation.read',
	'observation/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observation',
		corsOptions: {
			methods: ['GET']
		},
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
			Object.assign({versions: VERSIONS.STU3}, observation_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observation_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observation_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observation_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_STRING),
		],
		scopes: scopes,
		controller: controller.getObservation
	},
	{
		type: 'post',
		path: '/:version/observation/_search',
		corsOptions: {
			methods: ['POST']
		},
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
			Object.assign({versions: VERSIONS.STU3}, observation_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observation_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observation_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observation_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observation_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observation_args.VALUE_STRING),
		],
		scopes: scopes,
		controller: controller.getObservation
	},
	{
		type: 'get',
		path: '/:version/observation/:id',
		corsOptions: {
			methods: ['GET']
		},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getObservationById
	}
];

/**
 * @name exports
 * @summary Observation config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PATIENT
	},
	routes
};
