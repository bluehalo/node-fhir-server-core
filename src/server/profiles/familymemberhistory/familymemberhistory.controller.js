/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getFamilyMemberHistory = function getFamilyMemberHistory ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));

		return service.getFamilyMemberHistory(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, FamilyMemberHistory, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getFamilyMemberHistoryById = function getFamilyMemberHistoryById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));

		return service.getFamilyMemberHistoryById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, FamilyMemberHistory, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating FamilyMemberHistory
 */
module.exports.createFamilyMemberHistory = function createFamilyMemberHistory ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));
		// Validate the resource type before creating it
		if (FamilyMemberHistory.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${FamilyMemberHistory.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new FamilyMemberHistory(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createFamilyMemberHistory(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, FamilyMemberHistory.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating FamilyMemberHistory. If the FamilyMemberHistory does not exist, it should be updated
 */
module.exports.updateFamilyMemberHistory = function updateFamilyMemberHistory ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let FamilyMemberHistory = require(resolveFromVersion(version, 'base/FamilyMemberHistory'));
		// Validate the resource type before creating it
		if (FamilyMemberHistory.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${FamilyMemberHistory.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new FamilyMemberHistory(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateFamilyMemberHistory(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, FamilyMemberHistory.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an FamilyMemberHistory.
 */
module.exports.deleteFamilyMemberHistory = function deleteFamilyMemberHistory ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteFamilyMemberHistory(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
