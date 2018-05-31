/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getExplanationOfBenefit = function getExplanationOfBenefit ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'uscore/ExplanationOfBenefit'));

		return service.getExplanationOfBenefit(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, ExplanationOfBenefit, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getExplanationOfBenefitById = function getExplanationOfBenefitById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'uscore/ExplanationOfBenefit'));

		return service.getExplanationOfBenefitById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, ExplanationOfBenefit, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating ExplanationOfBenefit
 */
module.exports.createExplanationOfBenefit = function createExplanationOfBenefit ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'uscore/ExplanationOfBenefit'));
		// Validate the resource type before creating it
		if (ExplanationOfBenefit.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ExplanationOfBenefit.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ExplanationOfBenefit(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createExplanationOfBenefit(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, ExplanationOfBenefit.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating ExplanationOfBenefit. If the ExplanationOfBenefit does not exist, it should be updated
 */
module.exports.updateExplanationOfBenefit = function updateExplanationOfBenefit ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let ExplanationOfBenefit = require(resolveFromVersion(version, 'uscore/ExplanationOfBenefit'));
		// Validate the resource type before creating it
		if (ExplanationOfBenefit.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ExplanationOfBenefit.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new ExplanationOfBenefit(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateExplanationOfBenefit(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, ExplanationOfBenefit.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an ExplanationOfBenefit.
 */
module.exports.deleteExplanationOfBenefit = function deleteExplanationOfBenefit ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteExplanationOfBenefit(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
