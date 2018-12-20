const _ = require('lodash');
const errors = require('./error.utils');

/**
 * Get valid scopes.
 *
 * @param {Object} scopes
 * @param {Array<String>} allowedScopes
 * @returns {Boolean}
 */
function getValidScopes(scopes, allowedScopes) {
	const tokenScope = scopes;
	const scopeArray = typeof tokenScope === 'string' ? tokenScope.split(/[, ]/) : [];
	const intersection = _.intersection(scopeArray, allowedScopes);

	return intersection;
}

/**
 * @name validateScopes
 * @summary {Function} Returns a middleware function that verifies bearer token and checks scope
 * @param {Array<String>} validScopes
 * @param {Object} loggerUtil
 * @param {Object} config
 */
module.exports.validateScopes = allowedScopes => {
	return async (req, res, next) => {
		let version = req.params.version;
		let { scope, context } = req.user;

		// get scopes that are valid for the endpoint specified
		const validScopes = getValidScopes(scope, allowedScopes);

		// verify if token has one of the required scopes
		if (validScopes && validScopes.length > 0) {
			// TODO: Validate/clean context?
			req.contexts = context;

			// validation complete
			return next();
		}

		return next(errors.unauthorized('Permission Denied', version));
	};
};
