const controller = require('./controllers/oauth.controller');

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
		},
		{
			name: 'launch',
			type: 'string'
		}],
		scopes: [{
			name: 'code',
			type: 'string'
		},
	],
		controller: controller.authorize
	},
	{
		type: 'post',
		path: '/token',
		args: [{
			name: 'grant_type',
			type: 'string',
			required: true
		},
		{
			name: 'code',
			type: 'string',
			required: true
		},
		{
			name: 'secret',
			type: 'string'
		},
		{
			name: 'refresh_token',
			type: 'string'
		}],
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
