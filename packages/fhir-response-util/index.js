const path = require('path');

const contentTypeMap = {
  '1_0_2': 'application/json+fhir',
  '3_0_1': 'application/fhir+json',
  '4_0_0': 'application/fhir+json',
  '4_0_1': 'application/fhir+json',
};

/**
 * @function getContentType
 * @description Get the correct application type for the response
 * @param {String} version Version of resources we are working with
 */
function getContentType(version) {
  return contentTypeMap[version] || 'application/json';
}

/**
 * @function operation
 * @description Used when you are calling a custom operation
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 */
function operation(req, res, json) {
  let fhirVersion = req.params.base_version;
  res.type(getContentType(fhirVersion));
  if (res.statusCode) {
    return res.json(json);
  }
  // default to 200
  return res.status(200).json(json);
}

/**
 * @function read
 * @description Used when you are returning a Bundle of resources
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 */
function read(req, res, json) {
  let fhirVersion = req.params.base_version;
  res.type(getContentType(fhirVersion));
  res.status(200).json(json);
}

/**
 * @function readOne
 * @description Used when you are returning a single resource of any type
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} resource - resource to send to client
 */
function readOne(req, res, resource) {
  let fhirVersion = req.params.base_version;

  if (resource && resource.meta) {
    res.set('Last-Modified', resource.meta.lastUpdated);
    res.set('ETag', `W/"${resource.meta.versionId}"`);
  }

  res.type(getContentType(fhirVersion));

  if (!resource) {
    res.sendStatus(404);
  } else {
    res.status(200).json(resource);
  }
}

/**
 * @function create
 * @description Used when you are creating a single resource of any type
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 * @param {Object} options - Any additional options necessary to generate response
 */
function create(req, res, json, options) {
  let fhirVersion = req.params.base_version ? req.params.base_version : '';
  let baseUrl = `${req.protocol}://${req.get('host')}`;

  let location;
  if (fhirVersion === '') {
    location = `${options.type}/${json.id}`;
  } else {
    location = `${fhirVersion}/${options.type}/${json.id}`;
  }

  if (json.resource_version) {
    let pathname = path.posix.join(location, '_history', json.resource_version);
    res.set('Content-Location', `${baseUrl}/${pathname}`);
    res.set('ETag', json.resource_version);
  }

  res.set('Location', location);
  res.status(201).end();
}

/**
 * @function update
 * @description Used when you are updating a single resource of any type
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 * @param {Object} options - Any additional options necessary to generate response
 */
function update(req, res, json, options) {
  let fhirVersion = req.params.base_version;
  let baseUrl = `${req.protocol}://${req.get('host')}`;
  let location = `${fhirVersion}/${options.type}/${json.id}`;
  let status = json.created ? 201 : 200;
  let date = new Date();

  if (json.resource_version) {
    let pathname = path.posix.join(location, '_history', json.resource_version);
    res.set('Content-Location', `${baseUrl}/${pathname}`);
    res.set('ETag', json.resource_version);
  }

  res.set('Last-Modified', date.toISOString());
  res.type(getContentType(fhirVersion));
  res.set('Location', location);
  res.status(status).end();
}

/**
 * @function remove
 * @description Used when you are deleting a single resource of any type
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 */
function remove(_req, res, json) {
  if (json && json.deleted) {
    res.set('ETag', json.deleted);
  }

  if (json && (json.resourceType === 'Bundle' || json.resourceType === 'OperationOutcome')) {
    res.status(200).json(json);
  } else {
    res.status(204).end();
  }
}

/**
 * @function history
 * @description Used when you are querying the history of a resource of any type
 * @param {Express.req} req - Express request object
 * @param {Express.res} res - Express response object
 * @param {Object} json - json to send to client
 */
function history(req, res, json) {
  let version = req.params.base_version;
  res.type(getContentType(version));
  res.status(200).json(json);
}

module.exports = {
  contentTypeMap,
  getContentType,
  read,
  readOne,
  create,
  update,
  remove,
  history,
  operation,
};
