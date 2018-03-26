const { sanitizeMiddleware } = require('./utils/sanitize.utils');
const { validate } = require('./utils/auth');
const appConfig = require('../config');
const path = require('path');
const glob = require('glob');
const cors = require('cors');

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
	let config_filepaths = glob.sync(path.join(process.cwd(), appConfig.files.configs));
	let config_files = config_filepaths.map(filepath => require(filepath));

	// Iterate over our config files and configure any valid routes
	for (let i = 0; i < config_files.length; i++) {
		let { routes, routeOptions } = config_files[i];
		// If the route is required, it is probably a metadata route which should always be loaded.
		// If the route has a profileKey, that means the consumer of node-fhir-server-core must
		// opt in to the route for it to be loaded. If they provided configurations for that
		// profile, then let's load the route.
		let user_provided_profile = profiles[routeOptions.version]
			&& profiles[routeOptions.version][routeOptions.profileKey];

		// Bail if not required and no user provided profile
		if (!routeOptions.required && !user_provided_profile) {
			continue;
		}

		let default_cors_options = Object.assign(
			{},
			server.corsOptions,
			user_provided_profile && user_provided_profile.corsOptions
		);

		// Iterate over all of our routes
		for (let j = 0; j < routes.length; j++) {
			let route = routes[j];
			// Merge any route specific cors options
			let cors_options = Object.assign({}, default_cors_options, route.corsOptions);
			// Enable cors with preflight options
			app.options(route.path, cors(cors_options));
			// Setup the route with all the appropriate middleware
			app[route.type](
				route.path,
				cors(cors_options),
				sanitizeMiddleware(route.args),
				// validate(route.scopes, logger, config),
				route.controller({
					profile: user_provided_profile,
					logger,
					config
				})
			);
		}


	}


};

module.exports = {
	setRoutes: setter
};
