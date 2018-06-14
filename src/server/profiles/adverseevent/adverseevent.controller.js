/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getAdverseEvent = function getAdverseEvent ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));

		return service.getAdverseEvent(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, AdverseEvent, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getAdverseEventById = function getAdverseEventById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));

		return service.getAdverseEventById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, AdverseEvent, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating AdverseEvent
 */
module.exports.createAdverseEvent = function createAdverseEvent ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));
		// Validate the resource type before creating it
		if (AdverseEvent.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AdverseEvent.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AdverseEvent(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createAdverseEvent(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, AdverseEvent.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating AdverseEvent. If the AdverseEvent does not exist, it should be updated
 */
module.exports.updateAdverseEvent = function updateAdverseEvent ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let AdverseEvent = require(resolveFromVersion(version, 'base/AdverseEvent'));
		// Validate the resource type before creating it
		if (AdverseEvent.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AdverseEvent.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AdverseEvent(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateAdverseEvent(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, AdverseEvent.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an AdverseEvent.
 */
module.exports.deleteAdverseEvent = function deleteAdverseEvent ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteAdverseEvent(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
