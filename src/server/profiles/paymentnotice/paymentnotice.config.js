const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./paymentnotice.arguments');
const controller = require('./paymentnotice.controller');

let write_only_scopes = write_scopes('PaymentNotice');
let read_only_scopes = read_scopes('PaymentNotice');

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
		path: '/:version/paymentnotice',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPaymentNotice
	},
	{
		type: 'post',
		path: '/:version/paymentnotice/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPaymentNotice
	},
	{
		type: 'get',
		path: '/:version/paymentnotice/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPaymentNoticeById
	},
	{
		type: 'post',
		path: '/:version/paymentnotice',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPaymentNotice
	},
	{
		type: 'put',
		path: '/:version/paymentnotice/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePaymentNotice
	},
	{
		type: 'delete',
		path: '/:version/paymentnotice/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePaymentNotice
	}
];

/**
 * @name exports
 * @summary PaymentNotice config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PAYMENTNOTICE
	},
	routes
};
