/*eslint dot-notation: 1*/

const jwt = require('jsonwebtoken');

// this should be passed in, remove
const config = {
	clientId: 'client id',
	secret: 'secret',
	resourceServer: ''
};

function normalizeURL(url) {
  if (url.endsWith('/')) {
    url = url.substring(0, url.length - 1);
  }
  return url.toLowerCase();
}

/**
 * @name exports
 * @summary Metadata controller
 */
module.exports.generateCode = (aud, launch, clientId, scope) => {

	const incomingJwt = launch && launch.replace(/=/g, '');

	if (normalizeURL(aud) !== normalizeURL(config.resourceServer)) {
		//TODO: follow oauth spec here
		console.log('Bad AUD value: ' + aud + ' (expecting ' + config.resourceServer);
		throw new Error('Bad Audience');
	}

	// create code object
	const code = {
		context: incomingJwt && jwt.decode(incomingJwt) || {},
		aud: clientId,
		// can check against valid scope
		scope: scope,
		iss: aud,
		jti: '45fc543a-8ff4-4fbf-b1f8-9976aac7f7e0' // generate this
	};

	// create code that expires in 5 minutes
	const signedCode = jwt.sign(code, config.secret, { expiresIn: '5m' });

	return signedCode;
};


/**
 * @name exports
 * @summary Returns a JWT token from signed code in authorize endpoint.
 */
module.exports.generateToken = (code) => {
	// verify the token
	jwt.verify(code, config.secret, function(err, decoded) {
		if (err) {
			console.error(err);
			throw new Error(err);
		}

		// if offline - attach a refresh token
		if (decoded.scope.indexOf('offline_access') >= 0) {
			decoded.context['refresh_token'] = jwt.sign(decoded, config.secret);
		}

		// create token objects
		var token = Object.assign({}, decoded.context, {
			token_type: 'bearer',
			expires_in: 3600,
			scope: decoded.scope,
			aud: decoded.aud,
			iss: decoded.iss,
			jti: decoded.jti
		});

		// create access token that expires in 1 hour
		token.access_token = jwt.sign(Object.assign({}, token), config.secret, { expiresIn: '1h' });

		return token;
	});


};
