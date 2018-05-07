const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const observationvitalsigns_args = require('./observationvitalsigns.arguments');
const controller = require('./observationvitalsigns.controller');

const scopes = [
	'user/*.*',
	'user/ObservationVitalSigns.*',
	'user/ObservationVitalSigns.read',
	'user/*.read',
	'observationvitalsigns/*.*',
	'observationvitalsigns/ObservationVitalSigns.*',
	'observationvitalsigns/ObservationVitalSigns.read',
	'observationvitalsigns/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/observationvitalsigns',
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
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationVitalSigns
	},
	{
		type: 'post',
		path: '/:version/observationvitalsigns/_search',
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
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CODE_VALUE_STRING),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMBO_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_CODE_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.COMPONENT_VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DATA_ABSENT_REASON),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.DEVICE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.METHOD),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED_TARGET),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.RELATED_TYPE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.SPECIMEN),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_CONCEPT),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_DATE),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_QUANTITY),
			Object.assign({versions: VERSIONS.STU3}, observationvitalsigns_args.VALUE_STRING)
		],
		scopes: scopes,
		controller: controller.getObservationVitalSigns
	},
	{
		type: 'get',
		path: '/:version/observationvitalsigns/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getObservationVitalSignsById
	}
];

/**
 * @name exports
 * @summary ObservationVitalSigns config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.OBSERVATIONVITALSIGNS
	},
	// TODO: VitalSigns is in draft phase, setting routes to an empty array
	// will omit it from our server, we can add this back in when it is in the spec
	routes: []
};
