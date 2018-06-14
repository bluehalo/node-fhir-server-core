/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getNutritionOrder = function getNutritionOrder ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let NutritionOrder = require(resolveFromVersion(version, 'base/NutritionOrder'));

		return service.getNutritionOrder(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, NutritionOrder, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getNutritionOrderById = function getNutritionOrderById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let NutritionOrder = require(resolveFromVersion(version, 'base/NutritionOrder'));

		return service.getNutritionOrderById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, NutritionOrder, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating NutritionOrder
 */
module.exports.createNutritionOrder = function createNutritionOrder ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let NutritionOrder = require(resolveFromVersion(version, 'base/NutritionOrder'));
		// Validate the resource type before creating it
		if (NutritionOrder.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${NutritionOrder.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new NutritionOrder(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createNutritionOrder(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, NutritionOrder.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating NutritionOrder. If the NutritionOrder does not exist, it should be updated
 */
module.exports.updateNutritionOrder = function updateNutritionOrder ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let NutritionOrder = require(resolveFromVersion(version, 'base/NutritionOrder'));
		// Validate the resource type before creating it
		if (NutritionOrder.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${NutritionOrder.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new NutritionOrder(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateNutritionOrder(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, NutritionOrder.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an NutritionOrder.
 */
module.exports.deleteNutritionOrder = function deleteNutritionOrder ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteNutritionOrder(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
