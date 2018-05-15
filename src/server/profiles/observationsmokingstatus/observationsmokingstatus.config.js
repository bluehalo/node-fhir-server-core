/* eslint-disable no-unused-vars */
const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const observationsmokingstatus_args = require('./observationsmokingstatus.arguments');
const controller = require('./observationsmokingstatus.controller');

const scopes = [
	'user/*.*',
	'user/ObservationSmokingStatus.*',
	'user/ObservationSmokingStatus.read',
	'user/*.read',
	'observationsmokingstatus/*.*',
	'observationsmokingstatus/ObservationSmokingStatus.*',
	'observationsmokingstatus/ObservationSmokingStatus.read',
	'observationsmokingstatus/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observationsmokingstatus',
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
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationSmokingStatus
	},
	{
		type: 'post',
		path: '/:version/observationsmokingstatus/_search',
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
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationsmokingstatus_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationSmokingStatus
	},
	{
		type: 'get',
		path: '/:version/observationsmokingstatus/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getObservationSmokingStatusById
	}
];

/**
 * @name exports
 * @summary ObservationSmokingStatus config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.OBSERVATIONSMOKINGSTATUS
	},
	routes: []
};
