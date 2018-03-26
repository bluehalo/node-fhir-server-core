const controller = require('./controllers/metadata.controller');
const { VERSIONS } = require('../../../constants');

let routes = [
	{
		type: 'get',
		path: '/stu3/metadata',
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
	routeOptions: {
		version: VERSIONS.STU3,
		required: true
	},
	routes
};
