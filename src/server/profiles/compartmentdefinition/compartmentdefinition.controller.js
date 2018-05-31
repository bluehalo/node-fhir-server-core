/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = function getAllergyIntolerance ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntolerance(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, AllergyIntolerance, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getAllergyIntoleranceById = function getAllergyIntoleranceById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntoleranceById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, AllergyIntolerance, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating AllergyIntolerance
 */
module.exports.createAllergyIntolerance = function createAllergyIntolerance ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));
		// Validate the resource type before creating it
		if (AllergyIntolerance.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AllergyIntolerance.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AllergyIntolerance(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createAllergyIntolerance(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, AllergyIntolerance.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating AllergyIntolerance. If the AllergyIntolerance does not exist, it should be updated
 */
module.exports.updateAllergyIntolerance = function updateAllergyIntolerance ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));
		// Validate the resource type before creating it
		if (AllergyIntolerance.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AllergyIntolerance.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new AllergyIntolerance(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateAllergyIntolerance(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, AllergyIntolerance.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an AllergyIntolerance.
 */
module.exports.deleteAllergyIntolerance = function deleteAllergyIntolerance ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteAllergyIntolerance(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
