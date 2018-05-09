/* eslint-disable no-unused-vars */
const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const observationresults_args = require('./observationresults.arguments');
const controller = require('./observationresults.controller');

const scopes = [
	'user/*.*',
	'user/ObservationResults.*',
	'user/ObservationResults.read',
	'user/*.read',
	'observationresults/*.*',
	'observationresults/ObservationResults.*',
	'observationresults/ObservationResults.read',
	'observationresults/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observationresults',
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
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationResults
	},
	{
		type: 'post',
		path: '/:version/observationresults/_search',
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
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationresults_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationResults
	},
	{
		type: 'get',
		path: '/:version/observationresults/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getObservationResultsById
	}
];

/**
 * @name exports
 * @summary ObservationResults config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.OBSERVATIONRESULTS
	},
	routes: []
};
