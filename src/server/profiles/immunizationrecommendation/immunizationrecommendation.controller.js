/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getImmunizationRecommendation = function getImmunizationRecommendation ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));

		return service.getImmunizationRecommendation(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, ImmunizationRecommendation, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getImmunizationRecommendationById = function getImmunizationRecommendationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));

		return service.getImmunizationRecommendationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, ImmunizationRecommendation, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating ImmunizationRecommendation
 */
module.exports.createImmunizationRecommendation = function createImmunizationRecommendation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));
		// Validate the resource type before creating it
		if (ImmunizationRecommendation.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ImmunizationRecommendation.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ImmunizationRecommendation(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createImmunizationRecommendation(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, ImmunizationRecommendation.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating ImmunizationRecommendation. If the ImmunizationRecommendation does not exist, it should be updated
 */
module.exports.updateImmunizationRecommendation = function updateImmunizationRecommendation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ImmunizationRecommendation = require(resolveFromVersion(version, 'base/ImmunizationRecommendation'));
		// Validate the resource type before creating it
		if (ImmunizationRecommendation.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ImmunizationRecommendation.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ImmunizationRecommendation(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateImmunizationRecommendation(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, ImmunizationRecommendation.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an ImmunizationRecommendation.
 */
module.exports.deleteImmunizationRecommendation = function deleteImmunizationRecommendation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteImmunizationRecommendation(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
