const { resolveFromVersion } = require('./resolve.utils');
const { VERSIONS } = require('../../constants');
const errors = require('./error.utils');
const path = require('path');

/**
 * Gets the content type based on the version.  DSUT2 returns 'application/json+fhir' where STU3
 * 'application/fhir+json'.
 *
 * @param {*} base_version
 */
let getContentType = base_version => {
	const DSTU2_TYPE = 'application/json+fhir';
	const STU3_TYPE = 'application/fhir+json';

	if (base_version === VERSIONS['1_0_2']) {
		return DSTU2_TYPE;
	} else if (base_version === VERSIONS['3_0_1']) {
		return STU3_TYPE;
	} else {
		return 'application/json';
	}
};

/**
 * @description When resources are read in the controller functions
 * they all need to respond in a similar manner
 * @function handleSingleReadResponse
 * @param {Express.response} res - Express response object
 * @param {function} next - next function from express middleware
 * @param {string} base_version - Which spec version is this request coming from
 * @param {T} Resource - Resource class to use for the results
 * @param {object} resource_json - resulting json to be passed in to the class
 */
let handleSingleReadResponse = (res, next, base_version, Resource, resource_json) => {
	if (resource_json) {
		res.set('ETag', `W/"${resource_json.meta.versionId}"`);
		res.set('Last-Modified', `${resource_json.meta.lastUpdated}`);
		res.type(getContentType(base_version));

		res.status(200).json(new Resource(resource_json));
	} else {
		next(errors.notFound(`${Resource.__resourceType} not found.`, base_version));
	}
};

/**
 * @description Handle all Operation Responses by passing own resource, because all operations
 * should return an out <Parameter>
 * @function handleOperationResponse
 * @param {Express.response} res - Express response object
 * @param {function} next - next function from express middleware
 * @param {string} base_version - Which spec version is this request coming from
 * @param {object} resource_json - resulting json to be passed in to the class
 */
let handleOperationResponse = (res, next, base_version, resource_json) => {
	//An Operation should always return some sort of out <Parameter>.
	res.type(getContentType(base_version));
	res.status(200).json(resource_json);
};

/**
 * @description When resources are read in the controller functions
 * they all need to respond in a similar manner
 * @function handleBundleReadResponse
 * @param {Express.response} res - Express response object
 * @param {string} base_version - Which spec version is this request coming from
 * @param {T} Resource - Resource class to use for the results
 * @param {Array<object>} resource_json - resulting json to be passed in to the class
 * @param {object} options - Any additional options for configuring the response
 * @param {string} options.resourceUrl - Url for your resource server
 * @param {string} options.resourceType - Type to use in creating the full url for the resource
 * this cannot be inferred all the time because some resources types are not queryable. For example,
 * SmokingStatus is a valid resource type, but /stu3/SmokingStatus/3 can never work, you have to
 * access the resource at /stu3/Observation/3 instead
 * @param {function} options.filter - Filter function to filter the resources out
 * the filter function should expect a resource to be passed in and return a boolean
 */
let handleBundleReadResponse = (res, base_version, Resource, resource_json = [], options) => {
	let Bundle = require(resolveFromVersion(base_version, 'Bundle'));
	let BundleLink = require(resolveFromVersion(base_version, 'BundleLink'));
	let { resourceUrl, resourceType = Resource.__resourceType } = options;

	let full_url = res.req.protocol + '://' + res.req.get('host') + res.req.originalUrl;
	let self_link = new BundleLink({ url: full_url, relation: 'self' });
	let results = new Bundle({ type: 'searchset', link: self_link });
	let entries = [];

	if (resource_json) {
		for (let resource of resource_json) {
			let type = resource.resourceType;

			// Modes:
			// match - This resource matched the search specification.
			// include - This resource is returned because it is referred to from another resource in the search set.
			// outcome - An OperationOutcome that provides additional information about the processing of a search.
			if (type === resourceType) {
				entries.push({
					search: { mode: 'match' },
					resource,
					fullUrl: `${resourceUrl}/${base_version}/${resourceType}/${resource.id}`,
				});
			} else {
				entries.push({
					search: { mode: 'include' },
					resource,
					fullUrl: `${resourceUrl}/${base_version}/${type}/${resource.id}`,
				});
			}
		}
	}

	results.entry = entries;
	results.total = entries.length;

	res.type(getContentType(base_version));
	res.status(200).json(results);
};

/**
 * @description When resources are expanded by id in the controller functions
 * they all need to respond in a similar manner
 * @function handleExpandReadResponse
 * @param {Express.response} res - Express response object
 * @param {string} base_version - Which spec version is this request coming from
 * @param {T} Resource - Resource class to use for the results
 * @param {Array<object>} resource_json - resulting json to be passed in to the class
 * @param {object} options - Any additional options for configuring the response
 * @param {string} options.resourceType - Type to use in creating the full url for the resource
 * this cannot be inferred all the time because some resources types are not queryable. For example,
 * SmokingStatus is a valid resource type, but /stu3/SmokingStatus/3 can never work, you have to
 * access the resource at /stu3/Observation/3 instead
 * @param {string} options.filter - Filter function to filter the resources out
 * the filter function should expect a resource to be passed in and return a boolean
 */
let handleExpandReadResponse = (res, base_version, Resource, resource_json = []) => {
	let ValueSet = require(resolveFromVersion(base_version, 'ValueSet'));
	let results = new ValueSet(resource_json);

	res.type(getContentType(base_version));
	res.status(200).json(results);
};

/**
 * @description When resources are passed to the create[resource] controller functions
 * they all need to respond in a similar manner with similar headers
 * @function handleCreateResponse
 * @param {Express.response} res - Express response object
 * @param {string} base_version - Which spec version is this request coming from
 * @param {string} type - type of resource, e.g. Patient or Observation
 * @param {object} results - Results from the operation
 * @param {string} results.id - Id of the updated/created resource
 * @param {string} results.resource_version - Version number of the updated resource
 */
let handleCreateResponse = (res, base_version, type, results, options) => {
	let { id, resource_version } = results;
	let { resourceUrl } = options;

	if (resource_version) {
		res.set('Content-Location', `${path.join(resourceUrl, base_version, type, id, '_history', resource_version)}`);
		res.set('ETag', `W/"${resource_version}"`);
	}

	res.set('Location', `${base_version}/${type}/${id}`);
	res.status(201).end();
};

/**
 * @description When resources are passed to the update[resource] controller functions
 * they all need to respond in a similar manner with similar headers
 * @function handleUpdateResponse
 * @param {Express.response} res - Express response object
 * @param {string} base_version - Which spec version is this request coming from
 * @param {string} type - type of resource, e.g. Patient or Observation
 * @param {object} results - Results from the operation
 * @param {string} results.id - Id of the updated/created resource
 * @param {boolean} results.created - Did the update result in a new resource being created
 * @param {string} results.resource_version - Version number of the updated resource
 */
let handleUpdateResponse = (res, base_version, type, results, options) => {
	let { id, created = false, resource_version } = results;
	let { resourceUrl } = options;

	let status = created ? 201 : 200;
	let date = new Date();

	if (resource_version) {
		res.set('Content-Location', `${path.join(resourceUrl, base_version, type, id, '_history', resource_version)}`);
		res.set('ETag', `${resource_version}`);
	}

	res.type(getContentType(base_version));
	res.set('Location', `${path.join(resourceUrl, base_version, type, id)}`);
	res.set('Last-Modified', date.toISOString());
	res.status(status).end();
};

/**
 * @description When resources are passed to the delete[resource] controller functions
 * they all need to respond in a similar manner
 * @function handleUpdateResponse
 * @param {Express.response} res - Express response object
 */
let handleDeleteResponse = (res, results) => {
	if (results && results.deleted) {
		res.set('ETag', `${results.deleted}`);
	}

	res.status(204).end();
};

/**
 * @description When resources are passed to the delete[resource] controller functions
 * they all need to respond in a similar manner with the correct error types
 * @function handleUpdateResponse
 * @param {Express.response} res - Express response object
 */
let handleDeleteRejection = (res, next, base_version, err) => {
	// Make sure the error code is valid
	if (err.code !== 405 && err.code !== 409) {
		let error = new Error('Invalid response code. Expected service to return an error code of either 405 or 409.');
		return next(error);
	}
	// pass the error through
	let error =
		err.code === 405
			? errors.methodNotAllowed(err.message, base_version)
			: errors.deleteConflict(err.message, base_version);

	next(error);
};

/**
 * @description When resources are read in the controller functions
 * they all need to respond in a similar manner
 * @function handleBundleReadResponse
 * @param {Express.response} res - Express response object
 * @param {string} base_version - Which spec version is this request coming from
 * @param {T} Resource - Resource class to use for the results
 * @param {Array<object>} resource_json - resulting json to be passed in to the class
 * @param {object} options - Any additional options for configuring the response
 * @param {string} options.resourceUrl - Url for your resource server
 * @param {string} options.resourceType - Type to use in creating the full url for the resource
 * this cannot be inferred all the time because some resources types are not queryable. For example,
 * SmokingStatus is a valid resource type, but /stu3/SmokingStatus/3 can never work, you have to
 * access the resource at /stu3/Observation/3 instead
 * @param {function} options.filter - Filter function to filter the resources out
 * the filter function should expect a resource to be passed in and return a boolean
 */
let handleBundleHistoryResponse = (res, base_version, Resource, resource_json = [], options) => {
	let Bundle = require(resolveFromVersion(base_version, 'Bundle'));
	let BundleLink = require(resolveFromVersion(base_version, 'BundleLink'));
	let BundleEntryRequest = require(resolveFromVersion(base_version, 'BundleEntryRequest'));

	let { resourceUrl, resourceType = Resource.__resourceType } = options;

	let full_url = res.req.protocol + '://' + res.req.get('host') + res.req.originalUrl;
	let self_link = new BundleLink({ url: full_url, relation: 'self' });
	let results = new Bundle({ link: self_link, type: 'history' });
	let entries = [];

	if (resource_json) {
		for (let resource of resource_json) {
			let history_url = `${res.req.protocol}://${res.req.get('host')}/${resource.id}/_history/${
				resource.meta.versionId
			}`;
			let bundle_request = new BundleEntryRequest({
				url: history_url,
				method: 'PUT',
			});

			entries.push({
				resource,
				fullUrl: `${resourceUrl}/${base_version}/${resourceType}/${resource.id}`,
				request: bundle_request,
			});
		}
	}

	results.entry = entries;
	results.total = entries.length;

	res.type(getContentType(base_version));
	res.status(200).json(results);
};

/**
 * @name exports
 * @static
 * @summary Various express response utils
 */
module.exports = {
	handleSingleReadResponse,
	handleOperationResponse,
	handleBundleReadResponse,
	handleCreateResponse,
	handleUpdateResponse,
	handleDeleteResponse,
	handleDeleteRejection,
	handleBundleHistoryResponse,
	handleExpandReadResponse,
};
