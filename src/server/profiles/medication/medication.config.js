const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const medication_args = require('./medication.arguments');
const controller = require('./medication.controller');

let write_only_scopes = write_scopes('Medication');
let read_only_scopes = read_scopes('Medication');

let routes = [
	{
		type: 'get',
		path: '/:version/medication',
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
			Object.assign({versions: VERSIONS.STU3}, medication_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.CONTAINER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.FORM),
			Object.assign({versions: VERSIONS.STU3}, medication_args.INGREDIENT),
			Object.assign({versions: VERSIONS.STU3}, medication_args.INGREDIENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.OVER_THE_COUNTER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.PACKAGE_ITEM),
			Object.assign({versions: VERSIONS.STU3}, medication_args.PACKAGE_ITEM_CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.STATUS)
		],
		scopes: read_only_scopes,
		controller: controller.getMedication
	},
	{
		type: 'post',
		path: '/:version/medication/_search',
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
			Object.assign({versions: VERSIONS.STU3}, medication_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.CONTAINER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.FORM),
			Object.assign({versions: VERSIONS.STU3}, medication_args.INGREDIENT),
			Object.assign({versions: VERSIONS.STU3}, medication_args.INGREDIENT_CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.OVER_THE_COUNTER),
			Object.assign({versions: VERSIONS.STU3}, medication_args.PACKAGE_ITEM),
			Object.assign({versions: VERSIONS.STU3}, medication_args.PACKAGE_ITEM_CODE),
			Object.assign({versions: VERSIONS.STU3}, medication_args.STATUS)
		],
		scopes: read_only_scopes,
		controller: controller.getMedication
	},
	{
		type: 'get',
		path: '/:version/medication/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getMedicationById
	},
	{
		type: 'post',
		path: '/:version/medication',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createMedication
	},
	{
		type: 'put',
		path: '/:version/medication/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateMedication
	}
];

/**
 * @name exports
 * @summary Medication config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.MEDICATION
	},
	routes
};
