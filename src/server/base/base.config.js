const controller = require('./base.controller.js');
// const { routeArgs } = require('../route.config.js');

let routes = [
	{
		type: 'put',
		path: '/:base_version/',
		corsOptions: {
			methods: ['PUT'],
		},
		args: [],
		controller: controller.batch,
	},
	{
		type: 'post',
		path: '/:base_version/',
		corsOptions: {
			methods: ['POST'],
		},
		args: [],
		controller: controller.batch,
	},
	{
		type: 'get',
		path: '/:base_version',
		corsOptions: {
			methods: ['GET'],
		},
		args: [],
		controller: controller.batch,
	},
];

/**
 * @name exports
 * @summary Base config
 */
module.exports = {
	routes,
};
