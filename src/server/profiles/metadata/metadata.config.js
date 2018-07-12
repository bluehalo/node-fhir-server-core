const { route_args } = require('../common.arguments');
const controller = require('./metadata.controller');
const { route_dependencies } = require('../common.dependencies');

let routes = [
	{
		type: 'get',
		path: '/:base/metadata',
		corsOptions: {
			methods: ['GET']
		},
		args: [ route_args.BASE ],
		scopes: [],
		controller: controller.getCapabilityStatement,
		dependencies: [ route_dependencies.SERVICE ]
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
