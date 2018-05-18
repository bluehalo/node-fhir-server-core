const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const immunization_args = require('./immunization.arguments');
const controller = require('./immunization.controller');

const read_scopes = [
	'user/*.*',
	'user/Immunization.*',
	'user/Immunization.read',
	'user/*.read',
	'immunization/*.*',
	'immunization/Immunization.*',
	'immunization/Immunization.read',
	'immunization/*.read'
];

const write_scopes = [
	'user/*.*',
	'user/Immunization.*',
	'user/Immunization.write',
	'user/*.write',
	'immunization/*.*',
	'immunization/Immunization.*',
	'immunization/Immunization.write',
	'immunization/*.write'
];

let routes = [
	{
		type: 'get',
		path: '/:version/immunization',
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
			Object.assign({versions: VERSIONS.STU3}, immunization_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.DOSE_SEQUENCE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.LOT_NUMBER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.NOTGIVEN),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.PRACTITIONER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REACTION),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REACTION_DATE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REASON),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REASON_NOT_GIVEN),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.VACCINE_CODE)
		],
		scopes: read_scopes,
		controller: controller.getImmunization
	},
	{
		type: 'post',
		path: '/:version/immunization/_search',
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
			Object.assign({versions: VERSIONS.STU3}, immunization_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.DOSE_SEQUENCE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.LOT_NUMBER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.NOTGIVEN),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.PRACTITIONER),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REACTION),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REACTION_DATE),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REASON),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.REASON_NOT_GIVEN),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, immunization_args.VACCINE_CODE)
		],
		scopes: read_scopes,
		controller: controller.getImmunization
	},
	{
		type: 'get',
		path: '/:version/immunization/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_scopes,
		controller: controller.getImmunizationById
	},
	{
		type: 'post',
		path: '/:version/immunization',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.createImmunization
	},
	{
		type: 'put',
		path: '/:version/immunization/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.updateImmunization
	}
];

/**
 * @name exports
 * @summary Immunization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.IMMUNIZATION
	},
	routes
};
