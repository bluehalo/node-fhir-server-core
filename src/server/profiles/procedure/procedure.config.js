const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const procedure_args = require('./procedure.arguments');
const controller = require('./procedure.controller');

const read_scopes = [
	'user/*.*',
	'user/Procedure.*',
	'user/Procedure.read',
	'user/*.read',
	'procedure/*.*',
	'procedure/Procedure.*',
	'procedure/Procedure.read',
	'procedure/*.read'
];

const write_scopes = [
	'user/*.*',
	'user/Procedure.*',
	'user/Procedure.write',
	'user/*.write',
	'procedure/*.*',
	'procedure/Procedure.*',
	'procedure/Procedure.write',
	'procedure/*.write'
];

let routes = [
	{
		type: 'get',
		path: '/:version/procedure',
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
			Object.assign({versions: VERSIONS.STU3}, procedure_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.DEFINITION),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.SUBJECT)
		],
		scopes: read_scopes,
		controller: controller.getProcedure
	},
	{
		type: 'post',
		path: '/:version/procedure/_search',
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
			Object.assign({versions: VERSIONS.STU3}, procedure_args.BASED_ON),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CATEGORY),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CODE),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.CONTEXT),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.DATE),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.DEFINITION),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.ENCOUNTER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PART_OF),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.PERFORMER),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, procedure_args.SUBJECT)
		],
		scopes: read_scopes,
		controller: controller.getProcedure
	},
	{
		type: 'get',
		path: '/:version/procedure/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_scopes,
		controller: controller.getProcedureById
	},
	{
		type: 'post',
		path: '/:version/procedure',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.createProcedure
	},
	{
		type: 'put',
		path: '/:version/procedure/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.updateProcedure
	}
];

/**
 * @name exports
 * @summary Procedure config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PROCEDURE
	},
	routes
};
