const path = require('path');
const glob = require('glob');
const { files } = require(path.resolve('./src/config'));
const { makeStatement } = require(path.resolve('./src/server/metadata/capability'));

// Load all the conformance documents ahead of time
const RESOURCES = glob
	.sync(files.conformanceStatements)
	.map(resource_path => {
		// Resource is a function that returns the conformance statement for this resource
		// and takes the number of that particular resource, (conformance statements need a count)
		const { Profile, Resource } = require(path.resolve(resource_path));
		return { Profile, Resource };
	});

// Create some objects with some data from the available profiles
let mapResources = profiles => {
	return ({ Profile, Resource }) => {
		// If we do not find a profile_name in the profiles, we will not be able to
		// getCount and then this resource will be filtered out in the next iteration
		const profile_name = Object.keys(profiles).find(name => name === Profile);
		return {
			makeResource: Resource,
			getCount: profiles[profile_name]
				&& profiles[profile_name].serviceModule
				&& profiles[profile_name].serviceModule.getCount
		};
	};
};

// Remove any resources that did not find a getCount method from the available profiles
// Each conformance statement MUST have a count, if there is no way to retrieve it then
// do not show it
let filterResources = (resource) => resource.makeResource && resource.getCount;

/**
 * @function generateCapabilityStatement
 * @description Assemble the capability statement based on the current profiles
 * @param {Object} profiles - List of profile services we are using
 * @param {Winston} logger - Instance of Winston's logger
 * @return {Object} - capability statement
 */
let generateCapabilityStatement = (req, profiles, logger) => new Promise((resolve, reject) => {
	logger.info('Metadata.generateCapabilityStatement');
	// Create a new base capability statement per request

	// Iterate over the availalbe resources
	let active_resources = RESOURCES
		// generate some useful objects, these will be used to make the statement
		// and query for the count of available records for the specific profile
		.map(mapResources(profiles))
		// Remove any ones that we do not have, we do not want to show conformance
		// statements for profiles that we do not support
		.filter(filterResources);

	// Iterate over all the filtered docs and make queries for each one
	// based on the getCount service method, req and logger are by no means necessary
	// but pass them in so the service can log in the same manner and see request if necessary
	// for any validation etc,
	return Promise.all(active_resources.map(resource => resource.getCount(req, logger)))
		.then((results) => {
			// Generate the resources conformance statement and add these to the main Capability Statement
			let resource_statements = active_resources.map((resource, i) => resource.makeResource(results[i]));
			// Add these resources to the main CapabilityStatement
			return resolve(makeStatement(resource_statements));
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
