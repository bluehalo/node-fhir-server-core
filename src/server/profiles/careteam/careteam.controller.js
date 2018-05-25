/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getCareTeam = function getCareTeam ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific careteam
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));

		return service.getCareTeam(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, CareTeam, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getCareTeamById = function getCareTeamById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific careteam
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));

		return service.getCareTeamById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, CareTeam, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a care_team
*/
module.exports.createCareTeam = function createCareTeam ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific care_team
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));
		// Validate the resource type before creating it
		if (CareTeam.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CareTeam.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new care_team resource and pass it to the service
		let care_team = new CareTeam(resource_body);
		let args = { id: resource_id, resource: care_team };
		// Pass any new information to the underlying service
		return service.createCareTeam(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, CareTeam.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a care_team. If the care_team does not exist, it should be updated
*/
module.exports.updateCareTeam = function updateCareTeam ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific care_team
		let CareTeam = require(resolveFromVersion(version, 'uscore/CareTeam'));
		// Validate the resource type before creating it
		if (CareTeam.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${CareTeam.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new care_team resource and pass it to the service
		let care_team = new CareTeam(resource_body);
		let args = { id: resource_id, resource: care_team };
		// Pass any new information to the underlying service
		return service.updateCareTeam(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, CareTeam.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an care team resource.
*/
module.exports.deleteCareTeam = function deleteCareTeam ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteCareTeam(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
