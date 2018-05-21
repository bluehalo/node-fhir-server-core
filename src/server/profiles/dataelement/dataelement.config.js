const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./dataelement.arguments');
const controller = require('./dataelement.controller');

const scopes = [
	'user/*.*',
	'user/DataElement.*',
	'user/DataElement.read',
	'user/*.read',
	'dataelement/*.*',
	'dataelement/DataElement.*',
	'dataelement/DataElement.read',
	'dataelement/*.read'
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
		path: '/:version/dataelement',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDataElement
	},
	{
		type: 'post',
		path: '/:version/dataelement/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getDataElement
	},
	{
		type: 'get',
		path: '/:version/dataelement/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getDataElementById
	}
];

/**
 * @name exports
 * @summary DataElement config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DATAELEMENT
	},
	routes
};
