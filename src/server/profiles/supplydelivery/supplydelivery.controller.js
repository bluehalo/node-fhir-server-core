/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getSupplyDelivery = function getSupplyDelivery ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));

		return service.getSupplyDelivery(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, SupplyDelivery, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getSupplyDeliveryById = function getSupplyDeliveryById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));

		return service.getSupplyDeliveryById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, SupplyDelivery, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating SupplyDelivery
 */
module.exports.createSupplyDelivery = function createSupplyDelivery ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));
		// Validate the resource type before creating it
		if (SupplyDelivery.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${SupplyDelivery.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new SupplyDelivery(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createSupplyDelivery(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, SupplyDelivery.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating SupplyDelivery. If the SupplyDelivery does not exist, it should be updated
 */
module.exports.updateSupplyDelivery = function updateSupplyDelivery ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let SupplyDelivery = require(resolveFromVersion(version, 'base/SupplyDelivery'));
		// Validate the resource type before creating it
		if (SupplyDelivery.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${SupplyDelivery.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new SupplyDelivery(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateSupplyDelivery(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, SupplyDelivery.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an SupplyDelivery.
 */
module.exports.deleteSupplyDelivery = function deleteSupplyDelivery ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteSupplyDelivery(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
