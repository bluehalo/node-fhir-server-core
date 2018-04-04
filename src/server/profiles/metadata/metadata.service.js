const path = require('path');
const glob = require('glob');
const { VERSIONS } = require('../../../../constants');
const { makeStatement, securityStatement } = require('../capability');

// Glob for discovering all dstu2 conformance statements
const files = path.resolve(__dirname, '../../*/conformance.js');

// Load all the conformance documents ahead of time
const RESOURCES = glob.sync(files)
	.map(resource_path => {
		// Resource is a function that returns the conformance statement for this resource
		// and takes the number of that particular resource
		const { Profile, Resource } = require(resource_path);
		return { Profile, Resource };
	});

// Find the associated getCount method for the resource, any resource that does not
// have an associated getCount method will be filtered out later
let mapResources = profiles => {
	return ({ Profile, Resource }) => {
		const profile_name = Object.keys(profiles).find(name => name === Profile);
		return {
			makeResource: Resource,
			getCount: profiles[profile_name]
				&& profiles[profile_name].serviceModule
				&& profiles[profile_name].serviceModule.getCount
		};
	};
};

// If we don't have a getCount method for the profile, then remove it because
// each conformance statement MUST have a count
let filterResources = (resource) => resource.makeResource && resource.getCount;

/**
 * @function generateCapabilityStatement
 * @description Assemble the capability statement based on the current profiles
 * @param {Object} profiles - List of profile services we are using
 * @param {Winston} logger - Instance of Winston's logger
 * @return {Promise<Object>} - Return the capability statement
 */
let generateCapabilityStatement = (req, config, logger) => new Promise((resolve, reject) => {
	logger.info('Metadata.generateCapabilityStatement');
	// Create a new base capability statement per request
	const { profiles, security } = config;

	// Map all the active resources
	let active_resources = RESOURCES
		.map(mapResources(profiles.dstu2))
		.filter(filterResources);

	// Create a context I can pass some data through
	let context = {
		version: VERSIONS.DSTU2
	};

	// Iterate over the active_resources and execute getCount for each one.
	// req and logger are by no means necessary, but pass them in so the service can
	// access the logger and see information in the request if necessary for any validation etc.
	return Promise.all(active_resources.map(resource => resource.getCount(req, logger, context)))
		.then((results) => {

			// Our server statment
			const server = { mode: 'server' };
			// Generate the resources conformance statement and add these to the main Capability Statement
			server.resource = active_resources.map((resource, i) => resource.makeResource(results[i]));

			if (config.server && security) {
				server.security = securityStatement(security);
			}

			// Add these resources to the main CapabilityStatement
			return resolve(makeStatement(server));
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
