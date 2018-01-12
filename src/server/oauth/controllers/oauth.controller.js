const { ServerError } = require('../../utils/error.utils');

/**
 * This is a stub for oauth.
 * Example ?client_id=client%20id&redirect_uri=https://fhir.sitenv.org/fhirconformance/&response_type=code&state=43220320&scope=launch,patient/*.read,openid&aud=https://lit-lake-71789.herokuapp.com
 *
 * @name exports
 * @summary Authorizes the request and return a signed code to be exchanged for a token.
 */
module.exports.authorize = (profile, config, logger) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		logger.info('Authorizing Code');

		const options = {
			iss: req.query.aud,
			launch: req.query.launch,
			clientId: req.query.client_id,
			scope: req.query.scope
		};

		if (req.query.response_type === 'code') {
			return service.authorization(req, logger, config, options)
			.then((signedCode) => {


				res.redirect(req.query.redirect_uri + ('?code=' + signedCode + '&state=' + req.query.state));
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
		} else if (req.query.response_type === 'token') {
			// TODO: authorize token
			next(new ServerError(500, 'not supported'));
		}
	};
};


/**
 * @name exports
 * @summary Returns a JWT token from signed code in authorize endpoint.
 */
module.exports.token = (profile, config, logger) => {


	let { serviceModule: service } = profile;

	return (req, res, next) => {
		logger.info('Authorizing Token');

		const grantType = req.body.grant_type;
		let code;
		if (grantType === 'authorization_code') {
			code = req.body.code;
		} else if (grantType === 'refresh_token') {
			code = req.body.refresh_token;
		}


		return service.token(req, logger, config, code, req.body.secret)
			.then((token) => {
				res.json(token);
			})
			.catch((err) => {
				next(new ServerError(500, err.message));
			});
	};

};
