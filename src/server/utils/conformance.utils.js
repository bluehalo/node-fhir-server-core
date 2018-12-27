const { getSearchParamaters } = require('./params.utils');

/**
 * @description Reduce function for removing duplicates from the search params array
 * @param {Object} collection - Cumulutaive array for reduce function
 * @param {Object} route_arg - route argument
 * @return {Object} collection
 */
let conformanceSearchParamsReduce = (collection, route_arg) => {
	// Use the name to find duplicates, we should not have arguments with the same name
	if (!collection.find(item => item.name === route_arg.name)) {
		collection.push(route_arg);
	}
	return collection;
};

/**
 * @description Filter function for determining which searchParam fields are needed
 * for conformance/capability statements
 * @param {Object} route_arg - route argument
 * @param {string} base_version - which version (not necessary now, but may be in the future)
 * @return {function} filter function for array.filter
 */
let conformanceSearchParamsFilter = base_version => route_arg => {
	return route_arg.conformance_hide
		? // If the conformance_hide property is true, always remove this element
		  false
		: // Else check our versions property, there are two possible cases
		  // If no versions are provided, it is available for all versions
		  !route_arg.versions ||
				// If versions are provided, make sure this arg is meant for this version
				(route_arg.versions && route_arg.versions.indexOf(base_version) > -1);
};

/**
 * @description Map function for taking a router argument and mapping it
 * into the searchParam field needed for conformance/capability statements
 * @param {string} version - which version (not necessary now, but may be in the future)
 * @return {function} map function for array.map
 */
/* eslint-disable no-unused-vars */
let conformanceSearchParamsMap = version => route_arg => {
	// The router adds extra arguments and those need to be discarded
	// these are the only fields we currently care about
	return {
		name: route_arg.name,
		type: route_arg.type,
		definition: route_arg.definition,
		documentation: route_arg.documentation,
	};
};

/**
 * Function to take the routes and the FHIR version and return an array of search parameters
 * @param {Array<Object>} routes - an array of routes from the profile config files
 * @param {string} version - Which FHIR version was hit
 * @return {Array<Object>} an array of filtered and mapped routes to show in the conformance statement
 */
let generateSearchParamsForConformance = (routes, version) => {
	return (
		routes
			// Get a flat list of all of our router arguments
			.reduce((all, route) => all.concat(route.args), [])
			// Filter parameters that should be excluded from this conformance
			// statement based on version or if it is a route parameter (e.g. version or id)
			// route parameters will have a conformance_hide property
			.filter(conformanceSearchParamsFilter(version))
			// Remove any duplicates from the array based on their name
			.reduce(conformanceSearchParamsReduce, [])
			// Route arguments have additional parameters necessary for generating routes
			// map over the routes and remove those parameters
			.map(conformanceSearchParamsMap(version))
	);
};

let getSearchParams = (profileKey, version) => {
	let params = getSearchParamaters(profileKey, version).filter(conformanceSearchParamsFilter(version));

	for (let key of Object.keys(params)) {
		let param = params[key];

		// don't show version
		if (param.versions) {
			delete param.versions;
		}
	}

	return params;
};

module.exports = {
	generateSearchParamsForConformance,
	getSearchParams,
};
