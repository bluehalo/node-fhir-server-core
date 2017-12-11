const path = require('path');
const glob = require('glob');
const { files } = require(path.resolve('./src/config'));
const { makeStatement } = require(path.resolve('./src/server/metadata/capability'));

// Load all the conformance documents ahead of time
const CONFORMANCE_DOCS = glob
	.sync(files.conformanceStatements)
	.map(document_path => ({ document_path, statement: require(path.resolve(document_path)) }));

// Create some objects based on the available profiles
let mapConformanceDocuments = profiles => {
	return ({ document_path, statement }) => {
		const profile_name = Object.keys(profiles).find(name => document_path.indexOf(name) > -1);
		return {
			name: profile_name,
			conformanceFunc: statement,
			getCount: profiles[profile_name]
				&& profiles[profile_name].serviceModule
				&& profiles[profile_name].serviceModule.getCount
		};
	};
};

// Remove any documents that did not find a matching name and getCount method from the available profiles
let filterConformanceDocuments = (doc) => doc.name && doc.conformanceFunc && doc.getCount;

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

	// Iterate over the availalbe conformance docs
	let conformance_documents = CONFORMANCE_DOCS
		// generate some useful objects, these will be used to make the statement
		// and query for the count of available records for the specific profile
		.map(mapConformanceDocuments(profiles))
		// Remove any ones that we do not have, we do not want to show conformance
		// statements for profiles that we do not support
		.filter(filterConformanceDocuments);

	// Iterate over all the filtered docs and make queries for each one
	// based on the getCount service method, req and logger are by no means necessary
	// but pass them in so the service can log in the same manner and see request if necessary
	// for any validation etc,
	return Promise.all(conformance_documents.map(doc => doc.getCount(req, logger)))
		.then((results) => {
			// Generate the completed statement
			let resources = conformance_documents.map((doc, i) => doc.conformanceFunc(results[i]));
			return resolve(makeStatement(resources));
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
