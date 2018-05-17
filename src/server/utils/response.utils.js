/**
* @description When resources are passed to the create[resource] controller functions
* they all need to respond in a similar manner with similar headers
* @function handleCreateResponse
* @param {Express.response} res - Express response object
* @param {string} version - Which spec version is this request coming from
* @param {string} type - type of resource, e.g. Patient or Observation
* @param {object} results - Results from the operation
* @param {string} results.id - Id of the updated/created resource
* @param {string} results.version - Version number of the updated resource
*/
let handleCreateResponse = (res, version, type, results) => {
	let { id, version: resource_version } = results;

	if (resource_version) {
		res.set('Content-Location', `${version}/${type}/${id}/_history/${resource_version}`);
	}

	res.set('Location', `${version}/${type}/${id}`);
	res.status(201).end();
};

/**
* @description When resources are passed to the update[resource] controller functions
* they all need to respond in a similar manner with similar headers
* @function handleUpdateResponse
* @param {Express.response} res - Express response object
* @param {string} version - Which spec version is this request coming from
* @param {string} type - type of resource, e.g. Patient or Observation
* @param {object} results - Results from the operation
* @param {string} results.id - Id of the updated/created resource
* @param {boolean} results.created - Did the update result in a new resource being created
* @param {string} results.version - Version number of the updated resource
*/
let handleUpdateResponse = (res, version, type, results) => {
	let { id, created = false, version: resource_version } = results;
	let status = created ? 201 : 200;
	let date = new Date();

	if (resource_version) {
		res.set('Content-Location', `${version}/${type}/${id}/_history/${resource_version}`);
	}

	res.set('Location', `${version}/${type}/${id}`);
	res.set('Last-Modified', date.toISOString());
	res.status(status).end();
};

/**
 * @name exports
 * @static
 * @summary Various express response utils
 */
module.exports = {
	handleCreateResponse,
	handleUpdateResponse
};
