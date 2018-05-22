/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getImmunization = ({ profile, logger, config, app }) => {
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


module.exports.getImmunizationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific immunization
		let Immunization = require(resolveFromVersion(version, 'uscore/Immunization'));

		return service.getImmunizationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Immunization, results)
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
module.exports.createImmunization = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
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
module.exports.updateImmunization = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
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
		return service.updateImmunization(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Immunization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};
