/**
 * This is a stub for oauth.
 *
 * @name exports
 * @summary Metadata controller
 */
module.exports.authorize = (profile, logger) => {
	let { serviceModule: service } = profile;

	return (req, res) => {
		logger.info('Authorizing Code');

		const signedCode = service.generateCode(req.query.aud, req.query.launch, req.query.clientId, req.query.scope);
		res.redirect(req.query.redirect_uri + ('?code=' + signedCode + '&state=' + req.query.state));
	};


};


/**
 * @name exports
 * @summary Returns a JWT token from signed code in authorize endpoint.
 */
module.exports.token = (profile, logger) => {


	let { serviceModule: service } = profile;

	return (req, res) => {
		logger.info('Authorizing Token');

		const grantType = req.body.grant_type;
		let code;
		if (grantType === 'authorization_code') {
			code = req.body.code;
		} else if (grantType === 'refresh_token') {
			code = req.body.refresh_token;
		}

		const token = service.generateToken(code);
		res.json(token);
	};



};
