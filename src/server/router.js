const versionValidationMiddleware = require('./middleware/version-validation.middleware.js');
const authenticationMiddleware = require('./middleware/authentication.middleware.js');
const sofScopeMiddleware = require('./middleware/sof-scope.middleware.js');
const { route_args: routeArgs, routes } = require('./route.config');
const hyphenToCamelcase = require('./utils/hyphen-to-camel.utils');
const { sanitizeMiddleware } = require('./utils/sanitize.utils');
const { getSearchParameters } = require('./utils/params.utils');
const { VERSIONS, INTERACTIONS } = require('../constants');
const deprecate = require('./utils/deprecation.notice.js');
const { container } = require('./winston.js');
const cors = require('cors');

let deprecatedLogger = deprecate(
	container.get('default'),
	'Using the logger this way is deprecated. Please see the documentation on ' +
		'BREAKING CHANGES in version 2.0.0 for instructions on how to upgrade.',
);

/**
 * @function getAllConfiguredVersions
 * @description Get a unique list of versions provided in profile configurations
 * @param {Object} profiles - Profile configurations from end users
 * @return {Array<String>} Array of versions we need to support
 */
function getAllConfiguredVersions(profiles = {}) {
	let supportedVersions = Object.values(VERSIONS);
	let providedVersions = Object.getOwnPropertyNames(profiles).reduce((set, profile_key) => {
		let { versions = [] } = profiles[profile_key];
		versions.forEach(version => set.add(version));
		return set;
	}, new Set());

	// Filter the provided versions by ones we actually support. We need to check this to make
	// sure some user does not pass in a version we do not officially support in core for whatever
	// reason. Otherwise there may be some compliance issues.
	return Array.from(providedVersions).filter(version => supportedVersions.indexOf(version) !== -1);
}

/**
 * @function hasValidService
 * @description Does this profile have a service with a function whose name
 * macthes what the route expects to call when invoked
 * @param {object} route - route configuration for this specific route
 * @param {object} profile - profile configuration for this particular profile
 * @return {boolean}
 */
function hasValidService(route = {}, profile = {}) {
	return Boolean(route.controller && profile.serviceModule && profile.serviceModule[route.controller.name]);
}

/**
 * @function enableOperationRoutesForProfile
 * @description Enable custom operation routes provided by the user
 * @param {Object} app - Express application instance
 * @param {Object} config - Application config
 * @param {Object} profile - Profile configuration from end users
 * @param {String} key - Profile name the user has configured
 * @param {Array<Object>} parameters - Parameters allowed for this profile
 * @param {Object} corsDefaults - Default cors settings
 */
function enableOperationRoutesForProfile(app, config, profile, key, parameters, corsDefaults) {
	const operationsController = require('./operations/operations.controller');
	// Error message we will use for invalid configurations
	let errorMessage =
		`Invalid operation configuration for ${key}. Please ` +
		'see the Operations wiki for instructions on how to use operations. ' +
		'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Operations';

	for (let op of profile.operation) {
		let functionName = hyphenToCamelcase(op.name || '');
		let hasController = profile.serviceModule ? Object.keys(profile.serviceModule).includes(functionName) : false;
		// Check for required configurations, must have name, route, method, and
		// a matching controller
		if (!op.name || !op.route || !op.method || !hasController) {
			throw new Error(errorMessage);
		}

		let lowercaseMethod = op.method.toLowerCase();
		let interaction = lowercaseMethod === 'post' ? INTERACTIONS.OPERATIONS_POST : INTERACTIONS.OPERATIONS_GET;

		let route = routes.find(rt => rt.interaction === interaction);
		let corsOptions = Object.assign({}, corsDefaults, {
			methods: [route.type.toUpperCase()],
		});

		let operationRoute = route.path
			.replace(':resource', key)
			.concat(op.route)
			.replace('$', '([$])');

		// Enable cors with preflight
		app.options(operationRoute, cors(corsOptions));

		// Enable this operation route
		app[route.type](
			// We need to allow the $ to exist in these routes
			operationRoute,
			cors(corsOptions),
			versionValidationMiddleware(profile),
			sanitizeMiddleware([routeArgs.BASE, routeArgs.ID, ...parameters]),
			authenticationMiddleware({ config }),
			sofScopeMiddleware({ route, auth: config.auth, name: key }),
			// TODO: REMOVE: logger in future versions
			operationsController[interaction]({ profile, name: functionName, logger: deprecatedLogger }),
		);
	}
}

function enableMetadataRoute(app, config, corsDefaults) {
	let { route } = require('./metadata/metadata.config');

	// Determine which versions need a metadata endpoint, we need to loop through
	// all the configured profiles and find all the uniquely provided versions
	let versionValidationConfiguration = {
		versions: getAllConfiguredVersions(config.profiles),
	};

	let corsOptions = Object.assign({}, corsDefaults, {
		methods: [route.type.toUpperCase()],
	});

	// Enable cors with preflight
	app.options(route.path, cors(corsOptions));

	// Enable metadata route
	app[route.type](
		route.path,
		cors(corsOptions),
		versionValidationMiddleware(versionValidationConfiguration),
		sanitizeMiddleware(route.args),
		route.controller({ config }),
	);
}

function enableResourceRoutes(app, config, corsDefaults) {
	// Iterate over all of our provided profiles
	for (let key in config.profiles) {
		let lowercaseKey = key.toLowerCase();
		let profile = config.profiles[key];
		// User's can override arguments by providing their own metadata
		// function, may have more use in other areas in the future
		let overrideArguments = profile.metadata;
		// We need to check if the provided key is one this server supports
		// so load anything related to the key here and handle with one simple error
		let controller, parameters;

		try {
			controller = require(`./profiles/${lowercaseKey}/${lowercaseKey}.controller`);
			parameters = profile.versions.reduce(
				(all, version) => all.concat(getSearchParameters(lowercaseKey, version, overrideArguments)),
				[],
			);
		} catch (err) {
			throw new Error(
				`${key} is an invalid profile configuration, please see the wiki for ` +
					'instructions on how to enable a profile in your server, ' +
					'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile',
			);
		}

		// Enable all provided operations for this profile
		if (profile.operation && profile.operation.length) {
			enableOperationRoutesForProfile(app, config, profile, key, parameters, corsDefaults);
		}

		// We want to enable all routes on each profile that has a valid service
		for (let route of routes) {
			switch (route.interaction) {
				case INTERACTIONS.SEARCH:
					route.args = [routeArgs.BASE, ...parameters];
					route.controller = controller[INTERACTIONS.SEARCH];
					break;
				case INTERACTIONS.HISTORY:
					route.args = [routeArgs.BASE, ...parameters];
					route.controller = controller[INTERACTIONS.HISTORY];
					break;
				case INTERACTIONS.HISTORY_BY_ID:
					route.args = [routeArgs.BASE, routeArgs.ID, ...parameters];
					route.controller = controller[INTERACTIONS.HISTORY_BY_ID];
					break;
				case INTERACTIONS.SEARCH_BY_VID:
					route.args = [routeArgs.BASE, routeArgs.ID, routeArgs.VERSION_ID];
					route.controller = controller[INTERACTIONS.SEARCH_BY_VID];
					break;
				case INTERACTIONS.SEARCH_BY_ID:
					route.args = [routeArgs.BASE, routeArgs.ID];
					route.controller = controller[INTERACTIONS.SEARCH_BY_ID];
					break;
				case INTERACTIONS.CREATE:
					route.args = [routeArgs.BASE];
					route.controller = controller[INTERACTIONS.CREATE];
					break;
				case INTERACTIONS.UPDATE:
					route.args = [routeArgs.BASE, routeArgs.ID];
					route.controller = controller[INTERACTIONS.UPDATE];
					break;
				case INTERACTIONS.DELETE:
					route.args = [routeArgs.BASE, routeArgs.ID];
					route.controller = controller[INTERACTIONS.DELETE];
					break;
				case INTERACTIONS.EXPAND_BY_ID:
					route.args = [routeArgs.BASE, routeArgs.ID, ...parameters];
					route.controller = controller[INTERACTIONS.EXPAND_BY_ID];
					break;
			}

			if (!hasValidService(route, profile)) {
				continue;
			}

			let corsOptions = Object.assign({}, corsDefaults, profile.corsOptions, {
				methods: [corsDefaults.methods || route.type.toUpperCase()],
			});

			let profileRoute = route.path.replace(':resource', key);

			// Enable cors with preflight
			app.options(profileRoute, cors(corsOptions));

			// Enable this operation route
			app[route.type](
				// We need to allow the $ to exist in these routes
				profileRoute,
				cors(corsOptions),
				versionValidationMiddleware(profile),
				sanitizeMiddleware(route.args),
				authenticationMiddleware({ config }),
				sofScopeMiddleware({ route, auth: config.auth, name: key }),
				// TODO: REMOVE: logger in future versions
				route.controller({ profile, config, app, logger: deprecatedLogger }),
			);
		}
	}
}

function setRoutes(options = {}) {
	let { app, config } = options;
	let { server } = config;

	// Setup default cors options
	let corsDefaults = Object.assign({}, server.corsOptions);

	// Enable all routes, operations are enabled inside enableResourceRoutes
	enableMetadataRoute(app, config, corsDefaults);
	enableResourceRoutes(app, config, corsDefaults);
}

module.exports = {
	setRoutes,
};
