const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const careplan_args = require('./careplan.arguments');
const controller = require('./careplan.controller');

const read_scopes = [
	'user/*.*',
	'user/CarePlan.*',
	'user/CarePlan.read',
	'user/*.read',
	'careplan/*.*',
	'careplan/CarePlan.*',
	'careplan/CarePlan.read',
	'careplan/*.read'
];

const write_scopes = [
	'user/*.*',
	'user/CarePlan.*',
	'user/CarePlan.write',
	'user/*.write',
	'careplan/*.*',
	'careplan/CarePlan.*',
	'careplan/CarePlan.write',
	'careplan/*.write'
];

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
		scopes: read_scopes,
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
		scopes: read_scopes,
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
		scopes: read_scopes,
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
		scopes: write_scopes,
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
		scopes: write_scopes,
		controller: controller.updateCarePlan
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
