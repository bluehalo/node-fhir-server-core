const { route_args, common_args, write_args } = require('../common.arguments');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const device_args = require('./device.arguments');
const controller = require('./device.controller');

const read_scopes = [
	'user/*.*',
	'user/Device.*',
	'user/Device.read',
	'user/*.read',
	'device/*.*',
	'device/Device.*',
	'device/Device.read',
	'device/*.read'
];

const write_scopes = [
	'user/*.*',
	'user/Device.*',
	'user/Device.write',
	'user/*.write',
	'device/*.*',
	'device/Device.*',
	'device/Device.write',
	'device/*.write'
];

let routes = [
	{
		type: 'get',
		path: '/:version/device',
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
			Object.assign({versions: VERSIONS.STU3}, device_args.DEVICE_NAME),
			Object.assign({versions: VERSIONS.STU3}, device_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, device_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, device_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, device_args.MODEL),
			Object.assign({versions: VERSIONS.STU3}, device_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, device_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, device_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, device_args.TYPE),
			Object.assign({versions: VERSIONS.STU3}, device_args.UDI_CARRIER),
			Object.assign({versions: VERSIONS.STU3}, device_args.UDI_DI),
			Object.assign({versions: VERSIONS.STU3}, device_args.URL)
		],
		scopes: read_scopes,
		controller: controller.getDevice
	},
	{
		type: 'post',
		path: '/:version/device/_search',
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
			Object.assign({versions: VERSIONS.STU3}, device_args.DEVICE_NAME),
			Object.assign({versions: VERSIONS.STU3}, device_args.IDENTIFIER),
			Object.assign({versions: VERSIONS.STU3}, device_args.LOCATION),
			Object.assign({versions: VERSIONS.STU3}, device_args.MANUFACTURER),
			Object.assign({versions: VERSIONS.STU3}, device_args.MODEL),
			Object.assign({versions: VERSIONS.STU3}, device_args.ORGANIZATION),
			Object.assign({versions: VERSIONS.STU3}, device_args.PATIENT),
			Object.assign({versions: VERSIONS.STU3}, device_args.STATUS),
			Object.assign({versions: VERSIONS.STU3}, device_args.TYPE),
			Object.assign({versions: VERSIONS.STU3}, device_args.UDI_CARRIER),
			Object.assign({versions: VERSIONS.STU3}, device_args.UDI_DI),
			Object.assign({versions: VERSIONS.STU3}, device_args.URL)
		],
		scopes: read_scopes,
		controller: controller.getDevice
	},
	{
		type: 'get',
		path: '/:version/device/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_scopes,
		controller: controller.getDeviceById
	},
	{
		type: 'post',
		path: '/:version/device',
		corsOptions: { methods: ['POST'] },
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.createDevice
	},
	{
		type: 'put',
		path: '/:version/device/:id',
		corsOptions: { methods: ['PUT'] },
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_scopes,
		controller: controller.updateDevice
	}
];

/**
 * @name exports
 * @summary Device config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.DEVICE
	},
	routes
};
