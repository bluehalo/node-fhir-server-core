const { route_args } = require('../profiles/common.arguments');
const controller = require('./metadata.controller');

let route = {
	type: 'get',
	path: '/:base_version/metadata',
	corsOptions: {
		methods: ['GET'],
	},
	args: [route_args.BASE],
	controller: controller.getCapabilityStatement,
};

/**
 * @name exports
 * @summary Metadata config
 */
module.exports = {
	route,
};
