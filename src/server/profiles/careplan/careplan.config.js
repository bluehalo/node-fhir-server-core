const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const careplan_args = require('./careplan.arguments');
const controller = require('./careplan.controller');

let write_only_scopes = write_scopes('CarePlan');
let read_only_scopes = read_scopes('CarePlan');

let routes = [
	{
		type: 'get',
		path: '/:version/careplan',
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
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_CODE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_DATE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_REFERENCE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CARE_TEAM),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CONDITION),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.DEFINITION),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.GOAL),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.INTENT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.REPLACES),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'post',
		path: '/:version/careplan/_search',
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
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_CODE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_DATE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ACTIVITY_REFERENCE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CARE_TEAM),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CONDITION),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.DEFINITION),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.GOAL),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.INTENT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.REPLACES),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careplan_args.SUBJECT)
		],
		scopes: read_only_scopes,
		controller: controller.getCarePlan
	},
	{
		type: 'get',
		path: '/:version/careplan/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getCarePlanById
	},
	{
		type: 'post',
		path: '/:version/careplan',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createCarePlan
	},
	{
		type: 'put',
		path: '/:version/careplan/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateCarePlan
	},
	{
		type: 'delete',
		path: '/:version/careplan/:id',
		corsOptions: { methods: ['DELETE'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteCarePlan
	}
];

/**
 * @name exports
 * @summary CarePlan config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CAREPLAN
	},
	routes
};
