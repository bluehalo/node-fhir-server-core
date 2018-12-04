const generateInteractions = require('./metadata.interactions');
const conformanceTemplate = require('./capability.template');
const errors = require('../utils/error.utils');

/**
* Load the correct statement generators for the right version
*/
let getStatementGenerators = (base_version) => {
	if (base_version) {
		return require(`./capability.${base_version}`);
	} else {
		return {};
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
let generateCapabilityStatement = (args, config, logger) => new Promise((resolve, reject) => {
	logger.info('Metadata.generateCapabilityStatement');
	// Create a new base_version capability statement per request
	let { profiles, security } = config;
	// Create a context object to pass through to underlying services
	// we may add more information to this later on
	let context = { base_version: args.base_version };
	// create profile list
	let keys = Object.keys(profiles);
	debugger
	let active_profiles = keys.map((profile_name) => {
		return {
			key: profile_name,
			makeResource: conformanceTemplate.resource,
			versions: profiles[profile_name]
				&& profiles[profile_name].versions,
			service: profiles[profile_name]
				&& profiles[profile_name].serviceModule
		};
	}).filter(profile => profile.versions.indexOf(context.base_version) !== -1);

	// Get the necessary functions to generate statements
	let { makeStatement, securityStatement } = config.statementGenerator ?
		config.statementGenerator(args, logger) :
		getStatementGenerators(args.base_version);
	debugger
	// If we do not have these functions, we cannot generate a new statement
	if (!makeStatement || !securityStatement) {
		// TODO: Figure out messaging for this scenario
		return reject(errors.internal('Unable to generate metadata for this FHIR specification.'));
	}

	// Let's start building our confromance/capability statement
	let server_statement = {
		mode: 'server'
	};

	// Add security information if available
	if (config.server && security) {
		server_statement.security = securityStatement(security);
	}

	// Make the resource and give it the version so it can only include valid search params
	server_statement.resource = active_profiles.map((profile) => {
		let resource = profile.service.makeResource ?
			profile.service.makeResource(Object.assign(args, {'key': profile.key}), logger) :
			profile.makeResource(context.base_version, profile.key);
		// Determine the interactions we need to list for this profile
		debugger
		resource.interaction = generateInteractions(profile.service, resource.type);
		return resource;
	});

	// Add the server statement to the main statement
	return resolve(makeStatement(server_statement));
});

/**
 * @name exports
 * @summary Metadata service
 */
module.exports = {
	generateCapabilityStatement
};
