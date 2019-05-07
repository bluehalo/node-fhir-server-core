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
<<<<<<< HEAD
let getSearchParameters = (profile, version, customArgsModule, logger) => {
	let lowercaseProfileName = profile.toLowerCase(),
		allArguments = {};
	// If we have a custom args module, we will use this to populate the allowed
	// args for this particular route instead of the default arguments included
=======
let getSearchParamaters = (profileKey, version, customArgsModule, logger) => {
	let lowercaseProfile = profileKey.toLowerCase();
	let fileIndex;
	let files;
	if (lowercaseProfile && typeof lowercaseProfile === 'string') {
		files = fs.readdirSync(path.resolve(__dirname + `/../standards/${version}/arguments/`)).map(filename => {
			return filename;
		});

		const filesLowerCase = files.map(elm => elm.split('.')[0].toLowerCase());
		fileIndex = filesLowerCase.indexOf(lowercaseProfile);
	}

	let resource_specific_args = null;
>>>>>>> cb20b031b68d1e99e33b722c48dd19791784570b
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
<<<<<<< HEAD

	// Load our common arguments that apply to all resources
	allArguments = Object.assign(
		allArguments,
		require(resolveFromVersion(version, '/parameters/resource.parameters.js')),
=======
	if (!resource_specific_args) {
		resource_specific_args = require(`../standards/${version}/arguments/${
			files[fileIndex] ? files[fileIndex] : lowercaseProfile + '.arguments'
		}`);
	}
	// Set paramaters
	let resource_args_array = Object.getOwnPropertyNames(resource_specific_args).map(arg_name =>
		Object.assign({ versions: version, name: arg_name }, resource_specific_args[arg_name]),
	);

	let search_args_array = Object.getOwnPropertyNames(search_args).map(arg_name =>
		Object.assign({ versions: version, name: arg_name }, search_args[arg_name]),
>>>>>>> cb20b031b68d1e99e33b722c48dd19791784570b
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
