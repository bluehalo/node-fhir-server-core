const {route_args, common_args} = require('../common.arguments');
const {CONFIG_KEYS, VERSIONS} = require('../../../constants');
const resource_args = require('./paymentnotice.arguments');
const controller = require('./paymentnotice.controller');

const scopes = [
	'user/*.*',
	'user/PaymentNotice.*',
	'user/PaymentNotice.read',
	'user/*.read',
	'paymentnotice/*.*',
	'paymentnotice/PaymentNotice.*',
	'paymentnotice/PaymentNotice.read',
	'paymentnotice/*.read'
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
		path: '/:version/paymentnotice',
		corsOptions: {methods: ['GET']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPaymentNotice
	},
	{
		type: 'post',
		path: '/:version/paymentnotice/_search',
		corsOptions: {methods: ['POST']},
		args: resourceAllArguments,
		scopes: scopes,
		controller: controller.getPaymentNotice
	},
	{
		type: 'get',
		path: '/:version/paymentnotice/:id',
		corsOptions: {methods: ['GET']},
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: scopes,
		controller: controller.getPaymentNoticeById
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
