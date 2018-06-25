const { route_args } = require('../common.arguments');
const controller = require('./metadata.controller');

let routes = [
	{
		type: 'get',
		path: '/:base/metadata',
		corsOptions: {
			methods: ['GET']
		},
		args: [ route_args.BASE ],
		scopes: [],
		controller: controller.getCapabilityStatement
	}
];

/**
 * @name exports
 * @summary Metadata config
 */
module.exports = {
	routes,
	routeOptions: {
		isMetadata: true
	}
};
