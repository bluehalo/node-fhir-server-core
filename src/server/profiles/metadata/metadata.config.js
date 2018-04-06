const controller = require('./metadata.controller');

let routes = [
	{
		type: 'get',
		path: '/:version/metadata',
		corsOptions: {
			methods: ['GET']
		},
		args: [{
			name: 'version',
			type: 'string'
		}],
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
