const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const careteam_args = require('./careteam.arguments');
const controller = require('./careteam.controller');

const scopes = [
	'user/*.*',
	'user/CareTeam.*',
	'user/CareTeam.read',
	'user/*.read',
	'careteam/*.*',
	'careteam/CareTeam.*',
	'careteam/CareTeam.read',
	'careteam/*.read'
];

let routes = [
	{
		type: 'get',
		path: '/:version/careteam',
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
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PARTICIPANT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.SUBJECT)
		],
		scopes: scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'post',
		path: '/:version/careteam/_search',
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
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PARTICIPANT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, careteam_args.SUBJECT)
		],
		scopes: scopes,
		controller: controller.getCareTeam
	},
	{
		type: 'get',
		path: '/:version/careteam/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getCareTeamById
	}
];

/**
 * @name exports
 * @summary CareTeam config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.CARETEAM
	},
	routes
};
