/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getDocumentReference = function getDocumentReference ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let DocumentReference = require(resolveFromVersion(version, 'uscore/DocumentReference'));

		return service.getDocumentReference(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, DocumentReference, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getDocumentReferenceById = function getDocumentReferenceById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let DocumentReference = require(resolveFromVersion(version, 'uscore/DocumentReference'));

		return service.getDocumentReferenceById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, DocumentReference, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating DocumentReference
 */
module.exports.createDocumentReference = function createDocumentReference ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let DocumentReference = require(resolveFromVersion(version, 'uscore/DocumentReference'));
		// Validate the resource type before creating it
		if (DocumentReference.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${DocumentReference.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new DocumentReference(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createDocumentReference(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, DocumentReference.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating DocumentReference. If the DocumentReference does not exist, it should be updated
 */
module.exports.updateDocumentReference = function updateDocumentReference ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let DocumentReference = require(resolveFromVersion(version, 'uscore/DocumentReference'));
		// Validate the resource type before creating it
		if (DocumentReference.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${DocumentReference.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new DocumentReference(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateDocumentReference(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, DocumentReference.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an DocumentReference.
 */
module.exports.deleteDocumentReference = function deleteDocumentReference ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteDocumentReference(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
