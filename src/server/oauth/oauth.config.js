const controller = require('./controllers/oauth.controller');

let routes = [
	{
		type: 'get',
		path: '/dstu2/authorize',
		args: [{
			name: 'aud',
			type: 'string',
			required: true
		}, {
			name: 'launch',
			type: 'string',
			required: true
		}, {
			name: 'clientId',
			type: 'string',
			required: true
		}, {
			name: 'scope',
			type: 'string',
			required: true
		}],
		scopes: [],
		controller: controller.authorize
	},
	{
		type: 'post',
		path: '/dstu2/token',
		args: [],
		scopes: [],
		controller: controller.token
	}
];



/**
 * @name exports
 * @summary OAUTH config
 */
module.exports = {
	routes
};
