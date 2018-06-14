/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getQuestionnaireResponse = function getQuestionnaireResponse ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));

		return service.getQuestionnaireResponse(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, QuestionnaireResponse, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getQuestionnaireResponseById = function getQuestionnaireResponseById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));

		return service.getQuestionnaireResponseById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, QuestionnaireResponse, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating QuestionnaireResponse
 */
module.exports.createQuestionnaireResponse = function createQuestionnaireResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));
		// Validate the resource type before creating it
		if (QuestionnaireResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${QuestionnaireResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new QuestionnaireResponse(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createQuestionnaireResponse(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, QuestionnaireResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating QuestionnaireResponse. If the QuestionnaireResponse does not exist, it should be updated
 */
module.exports.updateQuestionnaireResponse = function updateQuestionnaireResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let QuestionnaireResponse = require(resolveFromVersion(version, 'base/QuestionnaireResponse'));
		// Validate the resource type before creating it
		if (QuestionnaireResponse.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${QuestionnaireResponse.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new QuestionnaireResponse(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateQuestionnaireResponse(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, QuestionnaireResponse.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an QuestionnaireResponse.
 */
module.exports.deleteQuestionnaireResponse = function deleteQuestionnaireResponse ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteQuestionnaireResponse(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
