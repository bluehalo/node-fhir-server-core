/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/error.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getLocation = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));

		return service.getLocation(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Location, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getLocationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));

		return service.getLocationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Location, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a location
*/
module.exports.createLocation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Validate the resource type before creating it
		if (Location.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Location.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new location resource and pass it to the service
		let location = new Location(resource_body);
		let args = { id: resource_id, resource: location };
		// Pass any new information to the underlying service
		return service.createLocation(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Location.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a location. If the location does not exist, it should be updated
*/
module.exports.updateLocation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Validate the resource type before creating it
		if (Location.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Location.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new location resource and pass it to the service
		let location = new Location(resource_body);
		let args = { id: resource_id, resource: location };
		// Pass any new information to the underlying service
		return service.updateLocation(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Location.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a location resource.
*/
module.exports.deleteLocation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteLocation(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(new Error(err));
				// Pass the error back
				errors.handleDeleteRejection(res, next, version, err);
			});
	};
};
