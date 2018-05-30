const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_args = require('./paymentreconciliation.arguments');
const controller = require('./paymentreconciliation.controller');

let write_only_scopes = write_scopes('PaymentReconciliation');
let read_only_scopes = read_scopes('PaymentReconciliation');

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
		path: '/:version/paymentreconciliation',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPaymentReconciliation
	},
	{
		type: 'post',
		path: '/:version/paymentreconciliation/_search',
		args: resourceAllArguments,
		scopes: read_only_scopes,
		controller: controller.getPaymentReconciliation
	},
	{
		type: 'get',
		path: '/:version/paymentreconciliation/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getPaymentReconciliationById
	},
	{
		type: 'post',
		path: '/:version/paymentreconciliation',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createPaymentReconciliation
	},
	{
		type: 'put',
		path: '/:version/paymentreconciliation/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updatePaymentReconciliation
	},
	{
		type: 'delete',
		path: '/:version/paymentreconciliation/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deletePaymentReconciliation
	}
];

/**
 * @name exports
 * @summary PaymentReconciliation config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.PAYMENTRECONCILIATION
	},
	routes
};
