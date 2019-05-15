const controller = require('./metadata.controller.js');
const { route_args } = require('../route.config.js');

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
