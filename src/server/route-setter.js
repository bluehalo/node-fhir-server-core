const { versionValidationMiddleware } = require('./utils/version.validation.utils');
const { sanitizeMiddleware } = require('./utils/sanitize.utils');
const { validate } = require('./utils/auth.openid.validator');
const { resolve } = require('./utils/resolve.utils');
const { VERSIONS } = require('../constants');
const appConfig = require('../config');
const glob = require('glob');
const cors = require('cors');

/**
* @description Helper function to determine which versions are available
* and need to be supported by metadata endpoints
* @param {profiles} - Profile configurations from end users
* @return {array} Array of versions we need to support
*/
function getAllConfiguredVersions (profiles = {}) {
	let supported_versions = Object.values(VERSIONS);
	let provided_versions = Object.getOwnPropertyNames(profiles).reduce((set, profile_key) => {
		let { versions = [] } = profiles[profile_key];
		versions.forEach(version => set.add(version));
		return set;
	}, new Set());

	// Filter the provided versions by ones we actually support. We need to check this to make
	// sure some user does not pass in a version we do not officially support in core for whatever
	// reason. Otherwise there may be some compliance issues.
	return Array.from(provided_versions)
		.filter((version) => supported_versions.indexOf(version) !== -1);
}

/**
* @description Determine whether or not we have the necessary service for this
* route. If we do not, return false, otherwise return true
* @param {object} route - route configuration for this specific route
* @param {object} profile - profile configuration for this particular profile
* @return {boolean}
*/
function routeHasValidService (route, profile = {}) {
	// If we have no serviceModule, we can't enable this route
	if (!profile.serviceModule) {
		return false;
	}
	// If we do not have an export containing the correct service, don't enable the route
	if (!profile.serviceModule[route.controller.name]) {
		return false;
	}
	// This route has a valid service, so we can enable it
	return true;
}

/**
* @description Noop middleware for express
*/
function noOpMiddleware (req, res, next) {
	return next();
}

/**
* @description Validation Middleware Wrapper
*/
function authenticationMiddleware (options) {
	let { routeOptions, scopes, logger, config } = options;
	// Don't do any validation for testing
	if (process.env.NODE_ENV === 'test') {
		return noOpMiddleware;
	}
	// Don't validate the metadata route
	if (routeOptions.isMetadata) {
		return noOpMiddleware;
	}
	// Use the validation middleware
	return validate(scopes, logger, config);
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
	let {
		// app - instance of our express application
		app,
		// config - user provided configuration passed into core
		config,
		// logger - application logger which get's injected into the routes
		logger
	} = options;

	// Grab our user provided config
	let { profiles, server } = config;

	// Find and load all of our config files
	let config_filepaths = glob.sync(resolve(appConfig.files.configs));
	let config_files = config_filepaths.map(filepath => require(filepath));

	// Iterate over our config files and configure any valid routes
	for (let i = 0; i < config_files.length; i++) {
		let { routes, routeOptions = {}} = config_files[i];

		// The user can provider default cors options to be provided on all routes
		let default_cors_options = Object.assign({}, server.corsOptions);

		// Iterate over all of our routes
		for (let j = 0; j < routes.length; j++) {
			let route = routes[j];
			let profile = profiles[routeOptions.profileKey];

			// We need a profile for metadata so we know which versions we need to support
			if (routeOptions.isMetadata) {
				profile = { versions: getAllConfiguredVersions(profiles) };
			}

			// Skip the route if their is no profile provided for this route
			if (!profile) {
				continue;
			}

			// If we do not have a service function from the provided service module,
			// then don't add this route, don't test for metadata
			if (!routeOptions.isMetadata && !routeHasValidService(route, profile)) {
				continue;
			}

			// Merge any route specific cors options
			let cors_options = Object.assign(
				{},
				default_cors_options,
				profile && profile.corsOptions,
				// Add a default cors setting for methods that defaults to type, e.g. { methods: [ 'DELETE' ]}
				{ methods: [ route.type.toUpperCase() ]}
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
				// Authentication middleware
				authenticationMiddleware({ routeOptions, config, logger, scopes: route.scopes }),
				// Finally our controller function
				route.controller({ profile, logger, config, app })
			);
		}
	}
};

module.exports = {
	setRoutes: setter
};
