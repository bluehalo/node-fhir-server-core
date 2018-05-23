/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getPractitioner = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));

		return service.getPractitioner(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Practitioner, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getPractitionerById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));

		return service.getPractitionerById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Practitioner, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a practitioner
*/
module.exports.createPractitioner = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));
		// Validate the resource type before creating it
		if (Practitioner.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Practitioner.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new practitioner resource and pass it to the service
		let practitioner = new Practitioner(resource_body);
		let args = { id: resource_id, resource: practitioner };
		// Pass any new information to the underlying service
		return service.createPractitioner(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Practitioner.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a practitioner. If the practitioner does not exist, it should be updated
*/
module.exports.updatePractitioner = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific practitioner
		let Practitioner = require(resolveFromVersion(version, 'uscore/Practitioner'));
		// Validate the resource type before creating it
		if (Practitioner.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Practitioner.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new practitioner resource and pass it to the service
		let practitioner = new Practitioner(resource_body);
		let args = { id: resource_id, resource: practitioner };
		// Pass any new information to the underlying service
		return service.updatePractitioner(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Practitioner.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a practitioner resource.
*/
module.exports.deletePractitioner = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deletePractitioner(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
