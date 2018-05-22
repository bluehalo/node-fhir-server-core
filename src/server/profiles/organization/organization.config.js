const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const organization_args = require('./organization.arguments');
const controller = require('./organization.controller');

let write_only_scopes = write_scopes('Organization');
let read_only_scopes = read_scopes('Organization');

let routes = [
	{
		type: 'get',
		path: '/:version/organization',
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
			Object.assign({versions: VERSIONS.STU3}, organization_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, organization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, organization_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, organization_args.TYPE)
		],
		scopes: read_only_scopes,
		controller: controller.getOrganization
	},
	{
		type: 'post',
		path: '/:version/organization/_search',
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
			Object.assign({versions: VERSIONS.STU3}, organization_args.ACTIVE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, organization_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, organization_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, organization_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, organization_args.PHONETIC),
			Object.assign({versions: VERSIONS.STU3}, organization_args.TYPE)
		],
		scopes: read_only_scopes,
		controller: controller.getOrganization
	},
	{
		type: 'get',
		path: '/:version/organization/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getOrganizationById
	},
	{
		type: 'post',
		path: '/:version/organization',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createOrganization
	},
	{
		type: 'put',
		path: '/:version/organization/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateOrganization
	}
];

/**
 * @name exports
 * @summary Organization config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.ORGANIZATION
	},
	routes
};
