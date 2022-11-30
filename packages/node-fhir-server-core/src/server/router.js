const versionValidationMiddleware = require('./middleware/version-validation.middleware.js');
const authenticationMiddleware = require('./middleware/authentication.middleware.js');
const sofScopeMiddleware = require('./middleware/sof-scope.middleware.js');
const { route: metadataConfig } = require('./metadata/metadata.config');
const { routeArgs, routes } = require('./route.config');
const hyphenToCamelcase = require('./utils/hyphen-to-camel.utils');
const { sanitizeMiddleware } = require('./utils/sanitize.utils');
const { getController } = require('./utils/controllers.utils');
const { getSearchParameters } = require('./utils/params.utils');
const { VERSIONS, INTERACTIONS } = require('../constants');
const deprecate = require('./utils/deprecation.notice.js');
const operationsController = require('./operations/operations.controller');
const { container } = require('./winston.js');
const cors = require('cors');

const uniques = (list) => list.filter((val, index, self) => val && self.indexOf(val) === index);

let deprecatedLogger = deprecate(
  container.get('default'),
  'Using the logger this way is deprecated. Please see the documentation on ' +
    'BREAKING CHANGES in version 2.0.0 for instructions on how to upgrade.'
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
    versions.forEach((version) => set.add(version));
    return set;
  }, new Set());

  // Filter the provided versions by ones we actually support. We need to check this to make
  // sure some user does not pass in a version we do not officially support in core for whatever
  // reason. Otherwise there may be some compliance issues.
  return Array.from(providedVersions).filter(
    (version) => supportedVersions.indexOf(version) !== -1
  );
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
  return Boolean(profile.serviceModule && profile.serviceModule[route.interaction]);
}

/**
 * @function loadController
 * @param {String} lowercaseKey - Profile key
 * @param {String} interaction - Interaction needed to perform
 * @param {Object} service - Consumer provided service module
 * @return {Function} express middleware
 */
function loadController(lowercaseKey, interaction, service) {
  return (req, res, next) => {
    const { base_version } = req.params;
    const fhirVersion = VERSIONS[base_version] || VERSIONS['4_0_1']; // fallback to r4 for custom baseUrl
    const controller = getController(fhirVersion, lowercaseKey);
    // Invoke the correct interaction on our controller
    controller[interaction](service)(req, res, next);
  };
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
  // Error message we will use for invalid configurations
  let errorMessage =
    `Invalid operation configuration for ${key}. Please ` +
    'see the Operations wiki for instructions on how to use operations. ' +
    'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Operations';

  for (let op of profile.operation) {
    let functionName = hyphenToCamelcase(op.name || '');
    let hasController = profile.serviceModule
      ? typeof profile.serviceModule[functionName] === 'function'
      : false;

    // Check for required configurations, must have name, route, method, and
    // a matching controller
    if (!op.name || !op.route || !op.method || !hasController) {
      throw new Error(errorMessage);
    }

    let lowercaseMethod = op.method.toLowerCase();
    let interaction =
      lowercaseMethod === 'post' ? INTERACTIONS.OPERATIONS_POST : INTERACTIONS.OPERATIONS_GET;

    let route = routes.find((rt) => rt.interaction === interaction);
    let corsOptions = Object.assign({}, corsDefaults, {
      methods: [route.type.toUpperCase()],
    });

    if (profile.baseUrls && profile.baseUrls.length && profile.baseUrls.includes('/')) {
      const operationsRoute = '/'.concat(op.route).replace('$', '([$])');
      // Enable cors with preflight
      app.options(operationsRoute, cors(corsOptions));

      // Enable this operation route
      app[route.type](
        // We need to allow the $ to exist in these routes
        operationsRoute,
        cors(corsOptions),
        versionValidationMiddleware(profile),
        sanitizeMiddleware([routeArgs.BASE, routeArgs.ID, ...parameters]),
        authenticationMiddleware(config),
        sofScopeMiddleware({ route, auth: config.auth, name: key }),
        // TODO: REMOVE: logger in future versions
        operationsController[interaction]({ profile, name: functionName, logger: deprecatedLogger })
      );
    }

    const operationRoute = route.path
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
      authenticationMiddleware(config),
      sofScopeMiddleware({ route, auth: config.auth, name: key }),
      // TODO: REMOVE: logger in future versions
      operationsController[interaction]({ profile, name: functionName, logger: deprecatedLogger })
    );
  }
}

function enableMetadataRoute(app, config, corsDefaults) {
  const { profiles, security, statementGenerator } = config;

  const customBaseUrlProfiles = Object.keys(profiles)
    .map((profileName) => {
      const profile = profiles[profileName];
      if (profile.baseUrls && profile.baseUrls.length) {
        return profile;
      }
    })
    .filter((profile) => profile);

  const inferredProfiles = Object.keys(profiles)
    .map((profileName) => {
      const profile = profiles[profileName];
      if (!profile.baseUrls || !profile.baseUrls.length) {
        return profile;
      }
    })
    .filter((profile) => profile);

  // Determine which versions need a metadata endpoint, we need to loop through
  // all the configured profiles and find all the uniquely provided versions
  const versionValidationConfiguration = {
    versions: getAllConfiguredVersions(profiles),
  };

  const corsOptions = Object.assign({}, corsDefaults, {
    methods: ['GET'],
  });

  if (customBaseUrlProfiles.length) {
    const baseUrls = uniques(
      customBaseUrlProfiles
        .map((profile) => profile.baseUrls)
        .reduce((accum, val) => accum.concat(val), [])
    );

    baseUrls.forEach((baseUrl) => {
      const metadataPath = baseUrl === '/' ? '/metadata' : `${baseUrl}/metadata`;

      app.options(metadataPath, cors(corsOptions));

      // Enable metadata route
      app.get(
        metadataPath,
        cors(corsOptions),
        sanitizeMiddleware(metadataConfig.args),
        metadataConfig.controller({ profiles, security, statementGenerator })
      );
    });
  }

  if (inferredProfiles.length) {
    // Enable cors with preflight
    app.options(metadataConfig.path, cors(corsOptions));

    // Enable metadata route
    app.get(
      metadataConfig.path,
      cors(corsOptions),
      versionValidationMiddleware(versionValidationConfiguration),
      sanitizeMiddleware(metadataConfig.args),
      metadataConfig.controller({ profiles, security, statementGenerator })
    );
  }
}

function enableResourceRoutes(app, config, corsDefaults) {
  // Iterate over all of our provided profiles
  for (let profileName in config.profiles) {
    let lowercaseKey = profileName.toLowerCase();
    let profile = config.profiles[profileName];
    let versions = profile.versions;
    // User's can override arguments by providing their own metadata
    // function, may have more use in other areas in the future
    let overrideArguments = profile.metadata;

    // We need to check if the provided key is one this server supports
    // so load anything related to the key here and handle with one simple error
    let parameters;

    try {
      parameters = versions.reduce(
        (all, version) => all.concat(getSearchParameters(lowercaseKey, version, overrideArguments)),
        []
      );
    } catch (err) {
      throw new Error(
        `${profileName} is an invalid profile configuration, please see the wiki for ` +
          'instructions on how to enable a profile in your server, ' +
          'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile'
      );
    }

    // Enable all provided operations for this profile
    if (profile.operation && profile.operation.length) {
      enableOperationRoutesForProfile(app, config, profile, profileName, parameters, corsDefaults);
    }

    // Start iterating over potential routes to enable for this profile
    for (let route of routes) {
      // If we do not have a matching service function for this route, skip it
      if (!hasValidService(route, profile)) {
        continue;
      }

      // Calculate the cors setting we want for this route
      let corsOptions = Object.assign({}, corsDefaults, profile.corsOptions, {
        methods: [route.type.toUpperCase()],
      });

      // Define the arguments based on the interactions
      switch (route.interaction) {
        case INTERACTIONS.CREATE:
          route.args = [routeArgs.BASE];
          break;
        case INTERACTIONS.SEARCH_BY_ID:
        case INTERACTIONS.UPDATE:
        case INTERACTIONS.DELETE:
        case INTERACTIONS.PATCH:
          route.args = [routeArgs.BASE, routeArgs.ID];
          break;
        case INTERACTIONS.SEARCH:
        case INTERACTIONS.HISTORY:
          route.args = [routeArgs.BASE, ...parameters];
          break;
        case INTERACTIONS.HISTORY_BY_ID:
        case INTERACTIONS.EXPAND_BY_ID:
          route.args = [routeArgs.BASE, routeArgs.ID, ...parameters];
          break;
        case INTERACTIONS.SEARCH_BY_VID:
          route.args = [routeArgs.BASE, routeArgs.ID, routeArgs.VERSION_ID];
          break;
      }

      if (profile.baseUrls && profile.baseUrls.includes('/')) {
        let profileRoute = route.path
          .replace(':resource', profileName)
          .replace(':base_version/', '');

        // Enable cors with preflight
        app.options(profileRoute, cors(corsOptions));

        // Enable this operation route
        app[route.type](
          profileRoute,
          cors(corsOptions),
          sanitizeMiddleware(route.args),
          authenticationMiddleware(config),
          sofScopeMiddleware({ route, auth: config.auth, name: profileName }),
          loadController(lowercaseKey, route.interaction, profile.serviceModule)
        );
      } else {
        let profileRoute = route.path.replace(':resource', profileName);

        // Enable cors with preflight
        app.options(profileRoute, cors(corsOptions));

        // Enable this operation route
        app[route.type](
          profileRoute,
          cors(corsOptions),
          versionValidationMiddleware(profile),
          sanitizeMiddleware(route.args),
          authenticationMiddleware(config),
          sofScopeMiddleware({ route, auth: config.auth, name: profileName }),
          loadController(lowercaseKey, route.interaction, profile.serviceModule)
        );
      }
    }
  }
}

function enableBaseRoute(app, config, corsDefaults) {
  // Determine which versions need a base endpoint, we need to loop through
  // all the configured profiles and find all the uniquely provided versions
  let routes = require('./base/base.config');
  for (let i; routes.length; i++) {
    let versionValidationConfiguration = {
      versions: getAllConfiguredVersions(config.profiles),
    };
    let corsOptions = Object.assign({}, corsDefaults, {
      methods: [routes[i].type.toUpperCase()],
    });

    // Enable cors with preflight
    app.options(routes[i].path, cors(corsOptions));
    // Enable base route
    app[routes[i].type](
      routes[i].path,
      cors(corsOptions),
      versionValidationMiddleware(versionValidationConfiguration),
      sanitizeMiddleware(routes[i].args),
      routes[i].controller({ config })
    );
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
  // Enable all routes, operations base: Batch and Transactions
  enableBaseRoute(app, config, corsDefaults);
}

module.exports = {
  setRoutes,
};
