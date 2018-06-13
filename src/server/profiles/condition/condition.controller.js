/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getCondition = function getCondition ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific condition
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));

		return service.getCondition(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Condition, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getConditionById = function getConditionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific condition
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));

		return service.getConditionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Condition, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a condition
*/
module.exports.createCondition = function createCondition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific condition
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));
		// Validate the resource type before creating it
		if (Condition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Condition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new condition resource and pass it to the service
		let condition = new Condition(resource_body);
		let args = { id: resource_id, resource: condition };
		// Pass any new information to the underlying service
		return service.createCondition(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Condition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a condition. If the condition does not exist, it should be updated
*/
module.exports.updateCondition = function updateCondition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific condition
		let Condition = require(resolveFromVersion(version, 'uscore/Condition'));
		// Validate the resource type before creating it
		if (Condition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Condition.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new condition resource and pass it to the service
		let condition = new Condition(resource_body);
		let args = { id, resource: condition };
		// Pass any new information to the underlying service
		return service.updateCondition(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Condition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an condition resource.
*/
module.exports.deleteCondition = function deleteCondition ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteCondition(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
