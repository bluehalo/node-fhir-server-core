const controller = require('./metadata.controller');
const { VERSIONS } = require('../../../constants');

let routes = [
	{
		type: 'get',
		base: VERSIONS.DSTU2,
		path: '/metadata',
		corsOptions: {
			methods: ['GET']
		},
		args: [],
		scopes: [],
		controller: controller.getCapabilityStatement
	},
	{
		type: 'get',
		base: VERSIONS.STU3,
		path: '/metadata',
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
	routes
};
