const generateInteractions = require('./metadata.interactions');
const { VERSIONS } = require('../../../constants');
const errors = require('../../utils/error.utils');
const path = require('path');
const glob = require('glob');

/**
* Load all the conformance documents ahead of time
*/
let profile_conformance_documents = glob.sync(path.resolve(__dirname, '../*/conformance.js'))
	.map(conformance_path => require(conformance_path));

/**
* Return properties associated with the profile that will be useful for generating
* the resource object in the capability/conformance statement
*/
let mapProfiles = (profiles = {}) => {
	return ({ profile, resource }) => {
		const profile_name = Object.keys(profiles).find(name => name === profile);
		return {
			makeResource: resource,
			versions: profiles[profile_name]
				&& profiles[profile_name].versions,
			service: profiles[profile_name]
				&& profiles[profile_name].serviceModule,
			getCount: profiles[profile_name]
				&& profiles[profile_name].serviceModule
				&& profiles[profile_name].serviceModule.getCount
		};
	};
};

/**
* Filter resources/profiles baased on the, having the required properties
* if the service provided does not have a getCount method then we cannot
* generate a complete record
*/
let filterProfiles = (version) => {
	return resource => (
		resource.getCount
		&& resource.makeResource
		&& resource.versions.indexOf(version) > -1
	);
};

/**
* Load the correct statement generators for the right version
*/
let getStatementGenerators = (version) => {
	switch (version) {
		case VERSIONS.STU3: return require('./capability.stu3');
		default: return {};
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
	// Create a new base capability statement per request
	let { profiles, security } = config;
	// Create a context object to pass through to underlying services
	// we may add more information to this later on
	let context = { version: args.version };
	// Get a list of profiles and their conformance info for this spec version
	let active_profiles = profile_conformance_documents
		.map(mapProfiles(profiles))
		.filter(filterProfiles(context.version));

	// Get the necessary functions to generate statements
	let { makeStatement, securityStatement } = getStatementGenerators(context.version);

	// If we do not have these functions, we cannot generate a new statement
	if (!makeStatement || !securityStatement) {
		// TODO: Figure out messaging for this scenario
		return reject(errors.internal('Unable to generate metadata for this FHIR specification.'));
	}

	// Generate a list of promises
	let count_promises = active_profiles.map(profile => profile.getCount(args, logger));

	// Iterate over active resources and invoke get count on each
	return Promise.all(count_promises).then(counts => {
		// Let's start building our confromance/capability statement
		let server_statement = {
			mode: 'server'
		};

		// Add security information if available
		if (config.server && security) {
			server_statement.security = securityStatement(security);
		}

		// Make the resource and give it the version so it can only include valid search params
		server_statement.resource = active_profiles.map((profile, i) => {
			let resource = profile.makeResource(context.version, counts[i]);
			// Determine the interactions we need to list for this profile
			resource.interaction = generateInteractions(profile.service, resource.type);
			return resource;
		});

		// Add the server statement to the main statement
		return resolve(makeStatement(server_statement));
	})
	.catch(reject);

});

/**
 * @name exports
 * @summary Metadata service
 */
module.exports = {
	generateCapabilityStatement
};
