const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./familymemberhistory.arguments');
const controller = require('./familymemberhistory.controller');

const scopes = [
	'user/*.*',
	'user/FamilyMemberHistory.*',
	'user/FamilyMemberHistory.read',
	'user/*.read',
	'familymemberhistory/*.*',
	'familymemberhistory/FamilyMemberHistory.*',
	'familymemberhistory/FamilyMemberHistory.read',
	'familymemberhistory/*.read'
];

let commonArgsArray = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resourceArgsArray = Object.getOwnPropertyNames(resource_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_args[arg_name]));

const resourceAllArguments = [
	route_args.VERSION,	...commonArgsArray, ...resourceArgsArray,
];

let routes = [
	{
		type: 'get',
		path: '/:version/familymemberhistory',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getFamilyMemberHistory
	},
	{
		type: 'post',
		path: '/:version/familymemberhistory/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getFamilyMemberHistory
	},
	{
		type: 'get',
		path: '/:version/familymemberhistory/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getFamilyMemberHistoryById
	}
];

/**
 * @name exports
 * @summary FamilyMemberHistory config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.FAMILYMEMBERHISTORY
	},
	routes
};
