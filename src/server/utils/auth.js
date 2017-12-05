const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const errors = require(path.resolve('./src/server/utils/error.utils'));
const config = require(path.resolve('./src/config/config'));
const logger = require(path.resolve('./src/lib/winston'));


/**
 * Verify the JWT token
 *
 * @param {*} token
 * @param {*} secretOrPublicKey
 * @param {*} next
 */
function _verifyToken(token, secretOrPublicKey, next) {

    const issuer = config.authConfig.issuer;
    const clientId = config.clientId;

    // verify the token and signature with secret/pub key
    jwt.verify(token, secretOrPublicKey, { audience: clientId, issuer: issuer }, function(err, decoded) {
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
    if (req.headers && req.headers.bearer) {
        // testing for cors - get from params but needs to be in header
        const bearerToken = req.headers.bearer;
        const decodedToken = jwt.decode(bearerToken);

        // check algorithm so we know how to validate the signature
        if (decodedToken && decodedToken.header && decodedToken.header.alg) {
            if (decodedToken.header.alg.startsWith('HS')) {
                // IF HS*** algorith, validate signature based on secret key
                _verifyToken(bearerToken, config.secret, next);

            } else if (decodedToken.header.alg.startsWith('RS')) {
                // IF RS*** algorithm, validate signature based on certificate
                // Get public key
                const cert = fs.readFileSync(config.security.key);
                _verifyToken(bearerToken, cert, next);
            }
        }
    }

    // did not pass checks, return 401 message
    next(errors.unauthorized());
};
