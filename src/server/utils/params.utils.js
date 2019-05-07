const { resolveFromVersion } = require('./resolve.utils.js');

/**
 * @function getSearchParameters
 * @description Get the search parameters for a given resource on a specific version
 * @param {String} profile - Name of the profile we are retrieving arguments for
 * @param {String} version - Which version we are using
 * @param {String} customArgsModule - Path to a metadata module that contains
 *  a makeResource function that returns a search param
 * @return {Object} Arguments specific to a resource
 */
let getSearchParameters = (profile, version, customArgsModule, logger) => {
	let lowercaseProfileName = profile.toLowerCase(),
		allArguments = {};

	// If we have a custom args module, we will use this to populate the allowed
	// args for this particular route instead of the default arguments included
	if (customArgsModule) {
		let paramsAsArray = require(String(customArgsModule)).makeResource(
			Object.assign({}, { base_version: version, key: lowercaseProfileName }),
			logger,
		).searchParam;
		// We need to key these by name so we can remove duplicates on assign
		allArguments = paramsAsArray.reduce((all, arg) => {
			all[arg.name] = arg;
			return all;
		}, {});
	} else {
		allArguments = require(resolveFromVersion(version, `/parameters/${lowercaseProfileName}.parameters.js`));
	}

	// Load our common arguments that apply to all resources
	allArguments = Object.assign(
		allArguments,
		require(resolveFromVersion(version, '/parameters/resource.parameters.js')),
	);

	// Everyone has a DomainResource and Resource parameter we want to include
	// except DSTU2(1_0_2), so do not attempt to assign that in DSTU2
	if (version !== '1_0_2') {
		allArguments = Object.assign(
			allArguments,
			require(resolveFromVersion(version, '/parameters/domainresource.parameters.js')),
		);
	}

	// Convert these into an array
	return Object.getOwnPropertyNames(allArguments).map(name => {
		return Object.assign({ versions: version, name }, allArguments[name]);
	});
};

module.exports = {
	getSearchParameters,
};
