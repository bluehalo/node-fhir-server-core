/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getCarePlan = function getCarePlan ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific careplan
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));

		return service.getCarePlan(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, CarePlan, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getCarePlanById = function getCarePlanById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific careplan
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));

		return service.getCarePlanById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, CarePlan, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a care_plan
*/
module.exports.createCarePlan = function createCarePlan ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific care_plan
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));
		// Validate the resource type before creating it
		if (CarePlan.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CarePlan.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new care_plan resource and pass it to the service
		let care_plan = new CarePlan(resource_body);
		let args = { id: resource_id, resource: care_plan };
		// Pass any new information to the underlying service
		return service.createCarePlan(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, CarePlan.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a care_plan. If the care_plan does not exist, it should be updated
*/
module.exports.updateCarePlan = function updateCarePlan ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific care_plan
		let CarePlan = require(resolveFromVersion(version, 'uscore/CarePlan'));
		// Validate the resource type before creating it
		if (CarePlan.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CarePlan.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new care_plan resource and pass it to the service
		let care_plan = new CarePlan(resource_body);
		let args = { id: resource_id, resource: care_plan };
		// Pass any new information to the underlying service
		return service.updateCarePlan(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, CarePlan.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an care plan resource.
*/
module.exports.deleteCarePlan = function deleteCarePlan ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteCarePlan(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
