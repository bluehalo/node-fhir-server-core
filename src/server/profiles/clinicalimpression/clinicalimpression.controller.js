/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getClinicalImpression = function getClinicalImpression ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ClinicalImpression = require(resolveFromVersion(version, 'base/ClinicalImpression'));

		return service.getClinicalImpression(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, ClinicalImpression, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getClinicalImpressionById = function getClinicalImpressionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ClinicalImpression = require(resolveFromVersion(version, 'base/ClinicalImpression'));

		return service.getClinicalImpressionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, ClinicalImpression, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating ClinicalImpression
 */
module.exports.createClinicalImpression = function createClinicalImpression ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ClinicalImpression = require(resolveFromVersion(version, 'base/ClinicalImpression'));
		// Validate the resource type before creating it
		if (ClinicalImpression.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ClinicalImpression.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ClinicalImpression(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createClinicalImpression(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, ClinicalImpression.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating ClinicalImpression. If the ClinicalImpression does not exist, it should be updated
 */
module.exports.updateClinicalImpression = function updateClinicalImpression ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let ClinicalImpression = require(resolveFromVersion(version, 'base/ClinicalImpression'));
		// Validate the resource type before creating it
		if (ClinicalImpression.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ClinicalImpression.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ClinicalImpression(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateClinicalImpression(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, ClinicalImpression.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an ClinicalImpression.
 */
module.exports.deleteClinicalImpression = function deleteClinicalImpression ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteClinicalImpression(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
