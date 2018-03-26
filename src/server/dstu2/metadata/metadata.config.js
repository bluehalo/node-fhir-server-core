const controller = require('./controllers/metadata.controller');
const { VERSIONS } = require('../../../constants');

let routes = [
	{
		type: 'get',
		path: '/dstu2/metadata',
		corsOptions: {
			methods: ['GET']
		},
		args: [],
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
		version: VERSIONS.DSTU2,
		required: true
	}
};
