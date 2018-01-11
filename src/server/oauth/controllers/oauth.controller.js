/**
 * This is a stub for oauth.
 * Example ?client_id=client%20id&redirect_uri=https://fhir.sitenv.org/fhirconformance/&response_type=code&state=43220320&scope=launch,patient/*.read,openid&aud=https://lit-lake-71789.herokuapp.com
 *
 * @name exports
 * @summary Authorizes the request and return a signed code to be exchanged for a token.
 */
module.exports.authorize = (config, logger) => {
	let { serviceModule: service } = config.auth;

	return (req, res) => {
		logger.info('Authorizing Code');

		const options = {
			incomingJwt: req.query.launch && req.query.launch.replace(/=/g, ''),
			iss:req.query.aud, 
			launch: req.query.launch,
			clientId: req.query.clientId,
			scope: req.query.scope
		};

		const signedCode = service.generateCode(logger, config, options);
		res.redirect(req.query.redirect_uri + ('?code=' + signedCode + '&state=' + req.query.state));
	};


};


/**
 * @name exports
 * @summary Returns a JWT token from signed code in authorize endpoint.
 */
module.exports.token = (config, logger) => {


	let { serviceModule: service } = config.auth;

	return (req, res) => {
		logger.info('Authorizing Token');

		const grantType = req.body.grant_type;
		let code;
		if (grantType === 'authorization_code') {
			code = req.body.code;
		} else if (grantType === 'refresh_token') {
			code = req.body.refresh_token;
		}

		let secret = req.body.secret;

		const token = service.generateToken(logger, config, code, secret);
		res.json(token);
	};

};
