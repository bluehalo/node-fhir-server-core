const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const device_args = require('./device.arguments');
const controller = require('./device.controller');


let write_only_scopes = write_scopes('Device');
let read_only_scopes = read_scopes('Device');

let routes = [
	{
		type: 'get',
		path: '/:version/device',
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
		scopes: read_only_scopes,
		controller: controller.getDevice
	},
	{
		type: 'post',
		path: '/:version/device/_search',
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
		scopes: read_only_scopes,
		controller: controller.getDevice
	},
	{
		type: 'get',
		path: '/:version/device/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getDeviceById
	},
	{
		type: 'post',
		path: '/:version/device',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createDevice
	},
	{
		type: 'put',
		path: '/:version/device/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateDevice
	},
	{
		type: 'delete',
		path: '/:version/device/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteDevice
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
