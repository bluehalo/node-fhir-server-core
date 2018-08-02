const { route_args } = require('../common.arguments');
const controller = require('./metadata.controller');

let route = {
	type: 'get',
	path: '/:base/metadata',
	corsOptions: {
		methods: ['GET']
	},
	args: [ route_args.BASE ],
	controller: controller.getCapabilityStatement
};

/**
 * @name exports
 * @summary Metadata config
 */
module.exports = {
	route
};
