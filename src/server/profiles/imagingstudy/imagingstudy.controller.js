/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getImagingStudy = function getImagingStudy ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));

		return service.getImagingStudy(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, ImagingStudy, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getImagingStudyById = function getImagingStudyById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));

		return service.getImagingStudyById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, ImagingStudy, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating ImagingStudy
 */
module.exports.createImagingStudy = function createImagingStudy ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));
		// Validate the resource type before creating it
		if (ImagingStudy.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ImagingStudy.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ImagingStudy(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createImagingStudy(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, ImagingStudy.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating ImagingStudy. If the ImagingStudy does not exist, it should be updated
 */
module.exports.updateImagingStudy = function updateImagingStudy ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ImagingStudy = require(resolveFromVersion(version, 'base/ImagingStudy'));
		// Validate the resource type before creating it
		if (ImagingStudy.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ImagingStudy.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ImagingStudy(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateImagingStudy(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, ImagingStudy.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an ImagingStudy.
 */
module.exports.deleteImagingStudy = function deleteImagingStudy ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteImagingStudy(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
