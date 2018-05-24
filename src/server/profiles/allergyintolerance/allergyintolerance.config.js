const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const allergyintolerance_args = require('./allergyintolerance.arguments');
const controller = require('./allergyintolerance.controller');

let write_only_scopes = write_scopes('AllergyIntolerance');
let read_only_scopes = read_scopes('AllergyIntolerance');

let routes = [
	{
		type: 'get',
		path: '/:version/allergyintolerance',
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
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ASSERTER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CLINICAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CRITICALITY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.LAST_DATE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.MANIFESTATION),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ONSET),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.RECORDER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ROUTE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.SEVERITY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.TYPE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.VERIFICATION_STATUS)
		],
		scopes: read_only_scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'post',
		path: '/:version/allergyintolerance/_search',
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
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ASSERTER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CLINICAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.CRITICALITY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.LAST_DATE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.MANIFESTATION),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ONSET),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.RECORDER),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.ROUTE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.SEVERITY),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.TYPE),
			Object.assign({versions: VERSIONS.STU3}, allergyintolerance_args.VERIFICATION_STATUS)
		],
		scopes: read_only_scopes,
		controller: controller.getAllergyIntolerance
	},
	{
		type: 'get',
		path: '/:version/allergyintolerance/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getAllergyIntoleranceById
	},
	{
		type: 'post',
		path: '/:version/allergyintolerance',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createAllergyIntolerance
	},
	{
		type: 'put',
		path: '/:version/allergyintolerance/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateAllergyIntolerance
	},
	{
		type: 'delete',
		path: '/:version/allergyintolerance/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteAllergyIntolerance
	}
];

/**
 * @name exports
 * @summary AllergyIntolerance config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ALLERGYINTOLERANCE
	},
	routes
};
