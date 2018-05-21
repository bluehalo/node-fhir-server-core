const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./paymentreconciliation.arguments');
const controller = require('./paymentreconciliation.controller');

const scopes = [
	'user/*.*',
	'user/PaymentReconciliation.*',
	'user/PaymentReconciliation.read',
	'user/*.read',
	'paymentreconciliation/*.*',
	'paymentreconciliation/PaymentReconciliation.*',
	'paymentreconciliation/PaymentReconciliation.read',
	'paymentreconciliation/*.read'
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
		path: '/:version/paymentreconciliation',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPaymentReconciliation
	},
	{
		type: 'post',
		path: '/:version/paymentreconciliation/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPaymentReconciliation
	},
	{
		type: 'get',
		path: '/:version/paymentreconciliation/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPaymentReconciliationById
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
