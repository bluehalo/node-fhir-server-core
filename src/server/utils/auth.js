const path = require('path');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const jwkToPem = require('jwk-to-pem')
const errors = require(path.resolve('./src/server/utils/error.utils'));
const config = require(path.resolve('./src/config/config'));
const logger = require(path.resolve('./src/lib/winston'));

// TODO: If there is more than one key
function _getKeyForTokenValidation(decodedToken, authConfig) {
    if (authConfig.secretKey) {
        return authConfig.secretKey;
    } else if (_.get(authConfig, 'jwkSet.keys', []).length === 1) {
        const jwt = authConfig.jwkSet.keys[0];
        return jwkToPem(jwt)
    } else {
        return null;
    }
}

/**
 * Parse the `token` from the given
 * `req`'s authorization header.
 *
 * @api public
 * @param {Request} req
 * @return {String|null}
 */
function _parseBearerToken(req) {

    let auth;
    if (!req.headers || !(auth = req.headers.authorization)) {
      return null;
    }

    // split on space
    const parts = auth.split(' ');
    if (parts.length < 2) {
        return;
    }

    // get schema and token from array
    const schema = parts.shift().toLowerCase();
    const token = parts.join(' ');

    // validate that it is a bearer
    if (schema !== 'bearer') {
        return null;
    }

    return token;
  }

/**
 * Verify the JWT token
 *
 * @param {*} token
 * @param {*} secretOrPublicKey
 * @param {*} next
 */
function _verifyToken(token, secretOrPublicKey, options = {}, next) {
    const issuer = config.authConfig.issuer;
    const clientId = config.authConfig.clientId;
    const allOptions = Object.assign(options, { audience: clientId, issuer: issuer });

    // verify the token and signature with secret/pub key
    jwt.verify(token, secretOrPublicKey, allOptions, function(err, decoded) {
        if (err) {
            // log error return 401 with error message;
            logger.error(err, err.message);
            return next(errors.custom(401, 'Unauthorized request: ' + err.message));
        }

        // token should be valid at this point
        // TODO get scopes/permissions
        
        next();
    });
}

/**
 * @name Validate
 * @summary Validates the bearer token in the headers.
 */
module.exports.validate = (req, res, next) => {
    // get bearer token
    const bearerToken = _parseBearerToken(req);

    if (bearerToken) {
        const decodedToken = jwt.decode(bearerToken, {complete: true});
        const tokenKey = _getKeyForTokenValidation(decodedToken, config.authConfig) 
        _verifyToken(bearerToken, tokenKey, {}, next);
    }

    // did not pass checks, return 401 message
    next(errors.unauthorized());
};
