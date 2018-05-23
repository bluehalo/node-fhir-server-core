/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getGoal = function getGoal ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific goal
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));

		return service.getGoal(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Goal, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getGoalById = function getGoalById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific goal
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));

		return service.getGoalById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Goal, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a goal
*/
module.exports.createGoal = function createGoal ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific goal
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));
		// Validate the resource type before creating it
		if (Goal.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Goal.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new goal resource and pass it to the service
		let goal = new Goal(resource_body);
		let args = { id: resource_id, resource: goal };
		// Pass any new information to the underlying service
		return service.createGoal(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Goal.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a goal. If the goal does not exist, it should be updated
*/
module.exports.updateGoal = function updateGoal ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific goal
		let Goal = require(resolveFromVersion(version, 'uscore/Goal'));
		// Validate the resource type before creating it
		if (Goal.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Goal.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new goal resource and pass it to the service
		let goal = new Goal(resource_body);
		let args = { id: resource_id, resource: goal };
		// Pass any new information to the underlying service
		return service.updateGoal(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Goal.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a goal resource.
*/
module.exports.deleteGoal = function deleteGoal ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteGoal(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
