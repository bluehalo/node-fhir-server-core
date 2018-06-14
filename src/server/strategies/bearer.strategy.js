const Strategy = require('passport-http-bearer').Strategy;
const request = require('superagent');

/**
 * Bearer Strategy
 * Requires ENV variables for introspecting the token
 */
module.exports.strategy = new Strategy(
	function(token, done) {
		request
		.post(process.env.introspectionUrl)
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({token: token, client_id: process.env.clientId, client_secret: process.env.clientSecret})
		.then((introspectionResponse) => {
			const decodedToken = introspectionResponse.body;
			if (decodedToken.active) {
				let { scope, context, sub, user_id } = decodedToken;
				let user = {user_id, sub};

				return done(null, user, scope, context);
			}

			// default return unauthorized
			return done(new Error('Invalid token'));
		});
	}
);
