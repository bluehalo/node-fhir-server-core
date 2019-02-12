const path = require('path');
const fs = require('fs');

const { route_args, common_args, search_args } = require('../profiles/common.arguments');

let common_args_array = Object.getOwnPropertyNames(common_args).map(arg_name => common_args[arg_name]);

/**
 * @description Middleware for validating the correct spec version is being accessed
 * If the user is trying to access R4 but the server is route is only supposed
 * to allow STU3, then we need to trigger a 404 error. Otherwise, we can continue.
 * @param {Object} profile - Configurations for the profile from the wrapping library
 * @return {function} valid express middleware
 */
let getSearchParamaters = (profileKey, version, customArgsModule, logger) => {
	let fileIndex;
	let files;
	if (profileKey && typeof profileKey === 'string') {
		files = fs.readdirSync(path.resolve(__dirname + `/../standards/${version}/arguments/`)).map(filename => {
			return filename;
		});

		const filesLowerCase = files.map(elm => elm.split('.')[0].toLowerCase());
		fileIndex = filesLowerCase.indexOf(profileKey);
	}

	let resource_specific_args = null;
	if (customArgsModule) {
		resource_specific_args = require(`${customArgsModule}`).makeResource(
			Object.assign({}, { base_version: version, key: profileKey }),
			logger,
		).searchParam;
	}
	if (!resource_specific_args) {
		resource_specific_args = require(`../standards/${version}/arguments/${
			files[fileIndex] ? files[fileIndex] : profileKey + '.arguments'
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
	getSearchParamaters,
};
