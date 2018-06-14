/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getImmunization = function getImmunization ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));

		return service.getImmunization(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Immunization, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getImmunizationById = function getImmunizationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));

		return service.getImmunizationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Immunization, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a immunization
*/
module.exports.createImmunization = function createImmunization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));
		// Validate the resource type before creating it
		if (Immunization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Immunization.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new immunization resource and pass it to the service
		let immunization = new Immunization(resource_body);
		let args = { id: resource_id, resource: immunization };
		// Pass any new information to the underlying service
		return service.createImmunization(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Immunization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a immunization. If the immunization does not exist, it should be updated
*/
module.exports.updateImmunization = function updateImmunization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));
		// Validate the resource type before creating it
		if (Immunization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Immunization.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new immunization resource and pass it to the service
		let immunization = new Immunization(resource_body);
		let args = { id, resource: immunization };
		// Pass any new information to the underlying service
		return service.updateImmunization(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Immunization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an immunization resource.
*/
module.exports.deleteImmunization = function deleteImmunization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteImmunization(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
