/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getBodySite = function getBodySite ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));

		return service.getBodySite(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, BodySite, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getBodySiteById = function getBodySiteById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));

		return service.getBodySiteById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, BodySite, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating BodySite
 */
module.exports.createBodySite = function createBodySite ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));
		// Validate the resource type before creating it
		if (BodySite.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${BodySite.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new BodySite(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createBodySite(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, BodySite.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating BodySite. If the BodySite does not exist, it should be updated
 */
module.exports.updateBodySite = function updateBodySite ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let BodySite = require(resolveFromVersion(version, 'base/BodySite'));
		// Validate the resource type before creating it
		if (BodySite.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${BodySite.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new BodySite(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateBodySite(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, BodySite.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an BodySite.
 */
module.exports.deleteBodySite = function deleteBodySite ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteBodySite(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
