const controller = require('./controllers/oauth.controller');
const { CONFIG_KEYS } = require('../../constants');

let routes = [
	{
		type: 'get',
		path: '/authorize',
		args: [{
			name: 'client_id',
			type: 'string',
			required: true
		}, {
			name: 'redirect_uri',
			type: 'string',
			required: true
		}, {
			name: 'response_type',
			type: 'string',
			required: true
		}, {
			name: 'state',
			type: 'string',
			required: true
		}, {
			name: 'scope',
			type: 'string',
			required: true
		}, {
			name: 'aud',
			type: 'string',
			required: true
		}],
		scopes: [{
			name: 'code',
			type: 'string'
		}],
		controller: controller.authorize
	},
	{
		type: 'post',
		path: '/token',
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
	routeOptions: {
		profileKey: CONFIG_KEYS.OAUTH
	},
	routes
};
