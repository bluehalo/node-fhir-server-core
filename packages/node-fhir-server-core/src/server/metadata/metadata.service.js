const generateInteractions = require('./metadata.interactions.js');
const conformanceTemplate = require('./capability.template.js');
const deprecate = require('../utils/deprecation.notice.js');
const errors = require('../utils/error.utils.js');
const { container } = require('../winston.js');

let logger = container.get('default');

/**
 * Load the correct statement generators for the right version
 */
let getStatementGenerators = base_version => {
  if (base_version) {
    return require(`./capability.${base_version}`);
  } else {
    return require('./capability.4_0_0');
  }
};

/**
 * @function generateCapabilityStatement
 * @description Assemble the capability statement based on the current profiles
 * @param {Object} args - Arguments for the endpoint
 * @param {Object} profiles - List of profile services we are using
 * @param {Winston} logger - Instance of Winston's logger
 * @return {Promise<Object>} - Return the capability statement
 */
let generateCapabilityStatement = ({
  fhirVersion,
  profiles,
  security,
  statementGenerator = getStatementGenerators
}) =>
  new Promise((resolve, reject) => {
    logger.info('Metadata.generateCapabilityStatement');

    // create profile list
    let keys = Object.keys(profiles);
    let active_profiles = keys
      .map(profile_name => {
        return {
          key: profile_name,
          makeResource: conformanceTemplate.resource,
          versions: profiles[profile_name] && profiles[profile_name].versions,
          service: profiles[profile_name] && profiles[profile_name].serviceModule,
          metadata: profiles[profile_name] && profiles[profile_name].metadata
        };
      })
      .filter(profile => profile.versions.indexOf(fhirVersion) !== -1);

    // TODO: REMOVE: Logger deprecatedLogger
    let deprecatedLogger = deprecate(
      container.get('default'),
      'Using the logger this way is deprecated. Please see the documentation on ' +
        'BREAKING CHANGES in version 2.0.0 for instructions on how to upgrade.'
    );

    // Get the necessary functions to generate statements
    let { makeStatement, securityStatement } = statementGenerator(fhirVersion, deprecatedLogger);

    // If we do not have these functions, we cannot generate a new statement
    if (!makeStatement || !securityStatement) {
      return reject(errors.internal('Unable to generate metadata for this FHIR specification.'));
    }

    // Let's start building our confromance/capability statement
    const serverStatement = {
      mode: 'server'
    };

    // Add security information if available
    if (security) {
      serverStatement.security = securityStatement(security);
    }

    // Add operations to resource if they exist.
    let operations = keys.reduce((ops, profile_name) => {
      const opsInProfile = profiles[profile_name].operation;
      if (opsInProfile && opsInProfile.length) {
        opsInProfile.forEach(opInProfile => {
          const op = {
            name: opInProfile.name,
            definition: {
              reference: opInProfile.reference
                ? opInProfile.reference
                : `/OperationOutcome/${opInProfile.name}`
            }
          };
          ops.push(op);
        });
      }

      return ops;
    }, []);

    if (operations && operations.length) {
      serverStatement.operation = operations;
    }

    // Make the resource and give it the version so it can only include valid search params
    let customMakeResource = null;
    serverStatement.resource = active_profiles.map(profile => {
      if (profile.metadata) {
        customMakeResource = require(profile.metadata).makeResource;
      } else {
        customMakeResource = profile.service.makeResource;
      }
      let resource = customMakeResource
        ? customMakeResource(Object.assign(fhirVersion, { key: profile.key }), deprecatedLogger)
        : profile.makeResource(fhirVersion, profile.key);
      // Determine the interactions we need to list for this profile
      resource.interaction = generateInteractions(profile.service, resource.type);
      return resource;
    });

    // Add the server statement to the main statement
    return resolve(makeStatement(serverStatement));
  });

/**
 * @name exports
 * @summary Metadata service
 */
module.exports = {
  generateCapabilityStatement
};
