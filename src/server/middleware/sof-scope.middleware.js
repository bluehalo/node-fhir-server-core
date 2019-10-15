const scopeChecker = require('@asymmetrik/sof-scope-checker');
const noOpMiddleware = require('./noop.middleware.js');
const { INTERACTIONS } = require('../../constants');
const errors = require('../utils/error.utils');

/**
 * @name deriveActionFromInteraction
 * @summary Given an interaction, what type of action will be performed
 * on this particular route, either read, write, or *
 * @param {String} interaction
 * @return {String} action needed to access a route
 */
function deriveActionFromInteraction(interaction) {
	switch (interaction) {
		case INTERACTIONS.SEARCH:
		case INTERACTIONS.HISTORY:
		case INTERACTIONS.SEARCH_BY_ID:
		case INTERACTIONS.EXPAND_BY_ID:
		case INTERACTIONS.HISTORY_BY_ID:
		case INTERACTIONS.SEARCH_BY_VID:
		case INTERACTIONS.OPERATIONS_GET:
			return 'read';
		case INTERACTIONS.CREATE:
		case INTERACTIONS.UPDATE:
		case INTERACTIONS.DELETE:
		case INTERACTIONS.OPERATIONS_POST:
			return 'write';
		default:
			return '*';
	}
}

/**
 * @name parseScopes
 * @summary Parse scopes from a user context
 * @param {Object} user
 * @param {String} scopeKey
 * @return {Array<String>} scopes assigned to a particular user
 */
function parseScopes(user = {}, scopeKey = 'scope') {
	let scopes = user[scopeKey];

	if (Array.isArray(scopes)) {
		return scopes;
	}

	return typeof scopes === 'string' ? scopes.split(/[, ]/) : [];
}

/**
 * @name exports
 * @summary SOF Scope Middleware function
 */
module.exports = function sofScopeCheckMiddleware(options = {}) {
	let { route = {}, name = '', auth = {} } = options;
	// Disable validation when in a test environment
	if (process.env.NODE_ENV === 'test') {
		return noOpMiddleware;
	}
	// If we do not have Smart on FHIR Authorization enabled,
	// disable this middleware. If you are using some other system for scopes,
	// feel free to remove this and add your own checks
	if (auth.type !== 'smart' || auth.strategy === undefined) {
		return noOpMiddleware;
	}

	// At this point, we have determined we want Smart on FHIR authentication
	return function sofScopeMiddleware(req, res, next) {
		// name is lowercased, we want upper, foo -> Foo
		let resource = name.slice(0, 1).toUpperCase() + name.slice(1);
		let action = deriveActionFromInteraction(route.interaction);
		let scopes = parseScopes(req && req.user, auth.customScopeKey);
		// Check if they have permission
		let { error } = scopeChecker(resource, action, scopes);

		if (error) {
			return next(errors.unauthorized(error.message, req.params && req.params.version));
		}

		return next();
	};
};
