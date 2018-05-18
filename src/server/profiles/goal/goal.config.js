const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const goal_args = require('./goal.arguments');
const controller = require('./goal.controller');

const read_scopes = [
	'user/*.*',
	'user/Goal.*',
	'user/Goal.read',
	'user/*.read',
	'goal/*.*',
	'goal/Goal.*',
	'goal/Goal.read',
	'goal/*.read'
];

const write_scopes = [
	'user/*.*',
	'user/Organization.*',
	'user/Organization.write',
	'user/*.write',
	'organization/*.*',
	'organization/Organization.*',
	'organization/Organization.write',
	'organization/*.write'
];

let routes = [
	{
		type: 'get',
		path: '/:version/goal',
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
			Object.assign({versions: VERSIONS.STU3}, goal_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, goal_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, goal_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, goal_args.START_DATE),
			Object.assign({versions: VERSIONS.STU3}, goal_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, goal_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, goal_args.TARGET_DATE)
		],
		scopes: read_scopes,
		controller: controller.getGoal
	},
	{
		type: 'post',
		path: '/:version/goal/_search',
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
			Object.assign({versions: VERSIONS.STU3}, goal_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, goal_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, goal_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, goal_args.START_DATE),
			Object.assign({versions: VERSIONS.STU3}, goal_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, goal_args.SUBJECT),
			Object.assign({versions: VERSIONS.STU3}, goal_args.TARGET_DATE)
		],
		scopes: read_scopes,
		controller: controller.getGoal
	},
	{
		type: 'get',
		path: '/:version/goal/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_scopes,
		controller: controller.getGoalById
	},
	{
		type: 'post',
		path: '/:version/goal',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.createGoal
	},
	{
		type: 'put',
		path: '/:version/goal/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.updateGoal
	}
];

/**
 * @name exports
 * @summary Goal config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.GOAL
	},
	routes
};
