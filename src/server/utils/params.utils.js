const path = require('path');
const fs = require('fs');

const { route_args, common_args, search_args } = require('../profiles/common.arguments');

let common_args_array = Object.getOwnPropertyNames(common_args).map(arg_name => common_args[arg_name]);

const { route_args: routeArgs } = require('../route.config.js');


/**
 * @function getSearchParamaters
 * @description Get the search parameters for a given resource on a specific version
 * @param {String} profile - Name of the profile we are retrieving arguments for
 * @param {String} version - Which version we are using
 * @param {String} customArgsModule - Path to a metadata module that contains
 *  a makeResource function that returns a search param
 * @return {Object} Arguments specific to a resource
 */
let _getSearchParameters = (profile, version, customArgsModule, logger) => {
	let lowercaseProfileName = profile.toLowerCase(),
			allArguments = {};
	// If we have a custom args module, we will use this to populate the allowed
	// args for this particular route instead of the default arguments included
	if (customArgsModule) {
		let paramsAsArray = require(String(customArgsModule)).makeResource(
			Object.assign({}, { base_version: version, key: lowercaseProfileName }),
			logger
		).searchParam;
		// We need to key these by name so we can remove duplicates on merge
		allArguments = paramsAsArray.reduce((all, arg) => {
			all[arg.name] = arg;
			return all;
		}, {});
	} else {
		allArguments = require(
			`../resources/${version}/parameters/${lowercaseProfileName}.parameters.js`
		);
	}

	// Load our common arguments that apply to all resources
	allArguments = Object.assign(allArguments, require(
		`../resources/${version}/parameters/resource.parameters.js`
	));

	// Everyone has a DomainResource and Resource parameter we want to include
	// except DSTU2(1_0_2), so do not attempt to merge that in DSTU2
	if (version !== '1_0_2') {
		allArguments = Object.assign(allArguments, require(
			`../resources/${version}/parameters/domainresource.parameters.js`
		));
	}

	// Convert these into an array
	let argsAsArray = Object.getOwnPropertyNames(allArguments).map(name => {
		return Object.assign({ versions: version, name }, allArguments[name]);
	});

	return [
		// Include the base_version param in all
		routeArgs.BASE,
		// Include all the domainresource, resource, and profile specific args
		...argsAsArray
	];
};



/**
 * @description Get the search parameters for a given resource on a specific version
 * @param {String} profile - Name of the profile we are retrieving arguments for
 * @param {String} version - Which version we are using
 * @param {String} customArgsModule - Path to a metadata module that contains
 *  a makeResource function that returns a search param
 * @return {Object} Arguments specific to a resource
 */
let getSearchParamaters = (profile, version, customArgsModule, logger) => {
	let fileIndex;
	let files;
	if (profile && typeof profile === 'string') {
		files = fs.readdirSync(path.resolve(__dirname + `/../standards/${version}/arguments/`)).map(filename => {
			return filename;
		});

		const filesLowerCase = files.map(elm => elm.split('.')[0].toLowerCase());
		fileIndex = filesLowerCase.indexOf(profile);
	}

	let resource_specific_args = null;
	if (customArgsModule) {
		resource_specific_args = require(`${customArgsModule}`).makeResource(
			Object.assign({}, { base_version: version, key: profile }),
			logger,
		).searchParam;
	}
	if (!resource_specific_args) {
		resource_specific_args = require(`../standards/${version}/arguments/${
			files[fileIndex] ? files[fileIndex] : profile + '.arguments'
		}`);
	}
	// Set paramaters
	let resource_args_array = Object.getOwnPropertyNames(resource_specific_args).map(arg_name =>
		Object.assign({ versions: version }, resource_specific_args[arg_name]),
	);

	let search_args_array = Object.getOwnPropertyNames(search_args).map(arg_name =>
		Object.assign({ versions: version }, search_args[arg_name]),
	);

	let resource_all_arguments = [route_args.BASE, ...search_args_array, ...common_args_array, ...resource_args_array];

	return resource_all_arguments;
};

module.exports = {
	_getSearchParameters,
	getSearchParamaters,
};
