const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./practitionerrole.arguments');
const controller = require('./practitionerrole.controller');

const scopes = [
	'user/*.*',
	'user/PractitionerRole.*',
	'user/PractitionerRole.read',
	'user/*.read',
	'practitionerrole/*.*',
	'practitionerrole/PractitionerRole.*',
	'practitionerrole/PractitionerRole.read',
	'practitionerrole/*.read'
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
		path: '/:version/practitionerrole',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPractitionerRole
	},
	{
		type: 'post',
		path: '/:version/practitionerrole/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPractitionerRole
	},
	{
		type: 'get',
		path: '/:version/practitionerrole/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPractitionerRoleById
	}
];

/**
 * @name exports
 * @summary PractitionerRole config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PRACTITIONERROLE
	},
	routes
};
