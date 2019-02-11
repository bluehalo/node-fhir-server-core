const versionValidationMiddleware = require('./middleware/version-validation.middleware.js');
const sofScopeMiddleware = require('./middleware/sof-scope.middleware.js');
const { route_args } = require('./profiles/common.arguments');
const { sanitizeMiddleware } = require('./utils/sanitize.utils');
const { getSearchParamaters } = require('./utils/params.utils');
const hypenToCamelcase = require('./utils/hyphen-to-camel.utils');
const passport = require('passport');
const { VERSIONS, INTERACTIONS } = require('../constants');
const cors = require('cors');
const operationsController = require('./operations/operations.controller');

/**
 * @description Helper function to determine which versions are available
 * and need to be supported by metadata endpoints
 * @param {profiles} - Profile configurations from end users
 * @return {array} Array of versions we need to support
 */
function getAllConfiguredVersions(profiles = {}) {
	let supported_versions = Object.values(VERSIONS);
	let provided_versions = Object.getOwnPropertyNames(profiles).reduce((set, profile_key) => {
		let { versions = [] } = profiles[profile_key];
		versions.forEach(version => set.add(version));
		return set;
	}, new Set());

	// Filter the provided versions by ones we actually support. We need to check this to make
	// sure some user does not pass in a version we do not officially support in core for whatever
	// reason. Otherwise there may be some compliance issues.
	return Array.from(provided_versions).filter(version => supported_versions.indexOf(version) !== -1);
}

/**
 * @description Determine whether or not we have the necessary service for this
 * route. If we do not, return false, otherwise return true
 * @param {object} route - route configuration for this specific route
 * @param {object} profile - profile configuration for this particular profile
 * @return {boolean}
 */
function routeHasValidService(route, profile = {}) {
	// If we have no serviceModule, we can't enable this route
	if (!profile.serviceModule) {
		return false;
	}

	// If we do not have an export containing the correct service, don't enable the route
	if (!route.controller || !profile.serviceModule[route.controller.name]) {
		return false;
	}
	// This route has a valid service, so we can enable it
	return true;
}

/**
 * @description Noop middleware for express
 */
function noOpMiddleware(req, res, next) {
	return next();
}

/**
 * @description Validation Middleware Wrapper
 */
function authenticationMiddleware(options) {
	let { config } = options;
	// Don't do any validation for testing
	if (process.env.NODE_ENV === 'test') {
		return noOpMiddleware;
	}

	// if strategy is configured
	if (config.auth && config.auth.strategy) {
		let { name, useSession = false } = config.auth.strategy;
		return passport.authenticate(name, { session: useSession });
	} else {
		return noOpMiddleware;
	}
}

function configureMetadataRoute(options) {
	let { app, config, logger } = options;
	let { profiles, server } = config;
	let { route } = require('./metadata/metadata.config');
	// The user can provider default cors options to be provided on all routes
	let default_cors_options = Object.assign({}, server.corsOptions);
	let profile = { versions: getAllConfiguredVersions(profiles) };

	// Merge any route specific cors options
	let cors_options = Object.assign(
		{},
		default_cors_options,
		profile && profile.corsOptions,
		// Add a default cors setting for methods that defaults to type, e.g. { methods: [ 'DELETE' ]}
		{ methods: [route.type.toUpperCase()] },
	);

	// Enable cors with preflight options
	app.options(route.path, cors(cors_options));

	// Setup the route with all the appropriate middleware
	app[route.type](
		// Actual path for the route
		route.path,
		// Cors middleware
		cors(cors_options),
		// Version validation
		versionValidationMiddleware(profile),
		// Parameter sanitzation middleware
		sanitizeMiddleware(route.args),
		// Finally our controller function
		route.controller({ profile, logger, config, app }),
	);
}

function configureResourceRoutes(options) {
	let { app, config, logger } = options;
	let { profiles, server } = config;
	let { routes } = require('./route.config');

	// loop through all profiles
	for (const key of Object.keys(profiles)) {
		let profile = profiles[key];
		let customArguments = profile.metadata;
		// The user can provider default cors options to be provided on all routes
		let default_cors_options = Object.assign({}, server.corsOptions);

		// Get all search parameters for profile versions;
		let search_parameters = [];

		profile.versions.forEach(version => {
			search_parameters.push(...getSearchParamaters(key, version, customArguments, logger));
		});

		// Iterate over all of our routes
		for (let j = 0; j < routes.length; j++) {
			let route = routes[j];
			let controller = require(`./profiles/${key.toLowerCase()}/${key.toLowerCase()}.controller`);
			switch (route.interaction) {
				case INTERACTIONS.SEARCH:
					route.args = search_parameters;
					route.controller = controller[INTERACTIONS.SEARCH];
					break;
				case INTERACTIONS.HISTORY:
					route.args = search_parameters;
					route.controller = controller[INTERACTIONS.HISTORY];
					break;
				case INTERACTIONS.HISTORY_BY_ID:
					route.args = [route_args.ID, ...search_parameters];
					route.controller = controller[INTERACTIONS.HISTORY_BY_ID];
					break;
				case INTERACTIONS.SEARCH_BY_VID:
					route.args = [route_args.BASE, route_args.ID, route_args.VERSION_ID];
					route.controller = controller[INTERACTIONS.SEARCH_BY_VID];
					break;
				case INTERACTIONS.SEARCH_BY_ID:
					route.args = [route_args.BASE, route_args.ID];
					route.controller = controller[INTERACTIONS.SEARCH_BY_ID];
					break;
				case INTERACTIONS.CREATE:
					route.args = [route_args.BASE];
					route.controller = controller[INTERACTIONS.CREATE];
					break;
				case INTERACTIONS.UPDATE:
					route.args = [route_args.BASE, route_args.ID];
					route.controller = controller[INTERACTIONS.UPDATE];
					break;
				case INTERACTIONS.DELETE:
					route.args = [route_args.BASE, route_args.ID];
					route.controller = controller[INTERACTIONS.DELETE];
					break;
				case INTERACTIONS.EXPAND_BY_ID:
					route.args = [route_args.BASE, route_args.ID, ...search_parameters];
					route.controller = controller[INTERACTIONS.EXPAND_BY_ID];
					break;
				case INTERACTIONS.PATCH:
					route.args = [route_args.BASE, route_args.ID];
					route.controller = controller[INTERACTIONS.PATCH];
					break;
			}

			// If we do not have a service function from the provided service module,
			// then don't add this route, don't test for metadata
			if (!routeHasValidService(route, profile)) {
				continue;
			}

			// if we dont have any controllers
			if (!route.controller) {
				continue;
			}

			// Merge any route specific cors options
			let cors_options = Object.assign(
				{},
				default_cors_options,
				profile && profile.corsOptions,
				// Add a default cors setting for methods that defaults to type, e.g. { methods: [ 'DELETE' ]}
				{ methods: default_cors_options.methods || [route.type.toUpperCase()] },
			);

			// Enable cors with preflight options
			app.options(route.path.replace(':resource', key), cors(cors_options));

			// Setup the route with all the appropriate middleware
			app[route.type](
				// Actual path for the route
				route.path.replace(':resource', key),
				// Cors middleware
				cors(cors_options),
				// Version validation
				versionValidationMiddleware(profile),
				// Parameter sanitzation middleware
				sanitizeMiddleware(route.args),
				// Authentication middleware
				authenticationMiddleware({ config, logger }),
				// Scope validation
				sofScopeMiddleware({ route, name: key, auth: config.auth }),
				// Finally our controller function
				route.controller({ profile, logger, config, app }),
			);
		}
	}
}

function configureOperationRoutes(options) {
	let { app, config, logger } = options;
	let { profiles, server } = config;
	let { routes } = require('./route.config');

	let default_cors_options = Object.assign({}, server.corsOptions);
	// loop through all profiles
	for (const key of Object.keys(profiles)) {
		let profile = profiles[key];
		if (!profile.operation || !profile.operation.length) {
			continue;
		}

		for (var i = 0; i < profile.operation.length; i++) {
			const op = profile.operation[i];

			if (!op.name) {
				throw Error(
					'Must supply a key of name.  Value should be hyphen-cased in config file and camelCased in your implementation.',
				);
			}

			if (!op.route) {
				throw Error('Must supply a key of route. Value should begin with a forward slash, /');
			}

			if (!op.method) {
				throw Error('Must supply a key of method with value of either GET or POST.');
			}

			const funcName = hypenToCamelcase(op.name);

			if (!Object.keys(profile.serviceModule).includes(funcName)) {
				throw Error(
					`Must include a function for ${key} with name ${funcName} that you specified in your configuration file.`,
				);
			}
			let search_parameters = [];

			profile.versions.forEach(version => {
				search_parameters.push(...getSearchParamaters(key, version));
			});

			let route, operationControllerFunction;
			if (op.method.toLowerCase() === 'post') {
				route = routes.find(elm => elm.interaction === INTERACTIONS.OPERATIONS_POST);
				operationControllerFunction = INTERACTIONS.OPERATIONS_POST;
			} else {
				route = routes.find(elm => elm.interaction === INTERACTIONS.OPERATIONS_GET);
				operationControllerFunction = INTERACTIONS.OPERATIONS_GET;
			}

			// Merge any route specific cors options
			let cors_options = Object.assign(
				{},
				default_cors_options,
				profile && profile.corsOptions,
				// Add a default cors setting for methods that defaults to type, e.g. { methods: [ 'DELETE' ]}
				{ methods: [route.type.toUpperCase()] },
			);
			// Enable cors with preflight options
			app.options(route.path, cors(cors_options));
			// Setup the route with all the appropriate middleware
			app[route.type](
				// Actual path for the route
				route.path
					.replace(':resource', key)
					.concat(op.route)
					.replace('$', '([$])'),
				// Cors middleware
				cors(cors_options),
				// Version validation
				versionValidationMiddleware(profile),
				// Parameter sanitzation middleware
				sanitizeMiddleware([route_args.BASE, route_args.ID, ...search_parameters]),
				// Authentication middleware
				authenticationMiddleware({ config, logger }),
				// Scope validation
				sofScopeMiddleware({ route, auth: config.auth, name: key }),
				// Finally our controller function
				operationsController[operationControllerFunction]({ profile, logger, funcName }),
			);
		}
	}
}

// Step 1
// Find all the config files
// Step 2
// Filter all the config files by valid configurations
// Step 3
// Inject all necessary params into from config and app into route-setter
// Step 4
// Setup and configure all routes and make sure to pass in valid profiles for each route

const setter = (options = {}) => {
	// set metadata route
	configureMetadataRoute(options);

	// set operation routes
	configureOperationRoutes(options);

	// set resource routes
	configureResourceRoutes(options);
};

module.exports = {
	setRoutes: setter,
};
