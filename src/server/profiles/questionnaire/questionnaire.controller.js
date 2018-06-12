/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getQuestionnaire = function getQuestionnaire ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));

		return service.getQuestionnaire(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Questionnaire, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getQuestionnaireById = function getQuestionnaireById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));

		return service.getQuestionnaireById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Questionnaire, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating Questionnaire
 */
module.exports.createQuestionnaire = function createQuestionnaire ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));
		// Validate the resource type before creating it
		if (Questionnaire.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Questionnaire.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Questionnaire(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createQuestionnaire(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Questionnaire.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating Questionnaire. If the Questionnaire does not exist, it should be updated
 */
module.exports.updateQuestionnaire = function updateQuestionnaire ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let Questionnaire = require(resolveFromVersion(version, 'base/Questionnaire'));
		// Validate the resource type before creating it
		if (Questionnaire.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Questionnaire.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Questionnaire(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateQuestionnaire(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Questionnaire.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an Questionnaire.
 */
module.exports.deleteQuestionnaire = function deleteQuestionnaire ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteQuestionnaire(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
