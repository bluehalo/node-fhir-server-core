const controller = require('./controllers/metadata.controller');


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
	routes
};
