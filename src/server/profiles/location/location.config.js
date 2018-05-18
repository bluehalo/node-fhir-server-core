const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const location_args = require('./location.arguments');
const controller = require('./location.controller');

const read_scopes = [
	'user/*.*',
	'user/Location.*',
	'user/Location.read',
	'user/*.read',
	'location/*.*',
	'location/Location.*',
	'location/Location.read',
	'location/*.read'
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
		path: '/:version/location',
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
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, location_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, location_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, location_args.NEAR),
			Object.assign({versions: VERSIONS.STU3}, location_args.NEAR_DISTANCE),
			Object.assign({versions: VERSIONS.STU3}, location_args.OPERATIONAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, location_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, location_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, location_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, location_args.TYPE)
		],
		scopes: read_scopes,
		controller: controller.getLocation
	},
	{
		type: 'post',
		path: '/:version/location/_search',
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
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_CITY),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_COUNTRY),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_POSTALCODE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_STATE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ADDRESS_USE),
			Object.assign({versions: VERSIONS.STU3}, location_args.ENDPOINT),
			Object.assign({versions: VERSIONS.STU3}, location_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, location_args.NAME),
			Object.assign({versions: VERSIONS.STU3}, location_args.NEAR),
			Object.assign({versions: VERSIONS.STU3}, location_args.NEAR_DISTANCE),
			Object.assign({versions: VERSIONS.STU3}, location_args.OPERATIONAL_STATUS),
			Object.assign({versions: VERSIONS.STU3}, location_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, location_args.PARTOF),
			Object.assign({versions: VERSIONS.STU3}, location_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, location_args.TYPE)
		],
		scopes: read_scopes,
		controller: controller.getLocation
	},
	{
		type: 'get',
		path: '/:version/location/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_scopes,
		controller: controller.getLocationById
	},
	{
		type: 'post',
		path: '/:version/location',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.createLocation
	},
	{
		type: 'put',
		path: '/:version/location/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.updateLocation
	}
];

/**
 * @name exports
 * @summary Location config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.LOCATION
	},
	routes
};
