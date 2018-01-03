const controller = require('./controllers/observation.controller');

let routes = [
	{
		type: 'get',
		path: '/dstu2/observation',
		corsOptions: {
			methods: ['GET']
		},
		args: [],
		scopes: [],
		controller: controller.getObservation
	}
];

/**
 * @name exports
 * @summary Observations config
 */
module.exports = {
	routes
};
