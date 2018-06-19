const errors = require('./error.utils');

/**
* @description Middleware for validating the correct spec version is being accessed
* If the user is trying to access R4 but the server is route is only supposed
* to allow STU3, then we need to trigger a 404 error. Otherwise, we can continue.
* @param {Object} profile - Configurations for the profile from the wrapping library
* @return {function} valid express middleware
*/
let versionValidationMiddleware = ( profile = {}) => {
	let { versions = [] } = profile;

	return function validationMiddleware (req, res, next) {
		let base = req.params && req.params.base;

		if (!base || versions.indexOf(base) === -1) {
			return next(errors.notFound());
		}

		next();
	};
};

module.exports = {
	versionValidationMiddleware
};
