const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./slot.arguments');
const controller = require('./slot.controller');

const scopes = [
	'user/*.*',
	'user/Slot.*',
	'user/Slot.read',
	'user/*.read',
	'slot/*.*',
	'slot/Slot.*',
	'slot/Slot.read',
	'slot/*.read'
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
		path: '/:version/slot',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSlot
	},
	{
		type: 'post',
		path: '/:version/slot/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getSlot
	},
	{
		type: 'get',
		path: '/:version/slot/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getSlotById
	}
];

/**
 * @name exports
 * @summary Slot config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.SLOT
	},
	routes
};
