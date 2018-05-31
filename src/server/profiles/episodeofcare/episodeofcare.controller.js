/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getEpisodeOfCare = function getEpisodeOfCare ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EpisodeOfCare = require(resolveFromVersion(version, 'uscore/EpisodeOfCare'));

		return service.getEpisodeOfCare(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, EpisodeOfCare, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getEpisodeOfCareById = function getEpisodeOfCareById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let EpisodeOfCare = require(resolveFromVersion(version, 'uscore/EpisodeOfCare'));

		return service.getEpisodeOfCareById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, EpisodeOfCare, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating EpisodeOfCare
 */
module.exports.createEpisodeOfCare = function createEpisodeOfCare ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EpisodeOfCare = require(resolveFromVersion(version, 'uscore/EpisodeOfCare'));
		// Validate the resource type before creating it
		if (EpisodeOfCare.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EpisodeOfCare.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new EpisodeOfCare(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createEpisodeOfCare(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, EpisodeOfCare.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating EpisodeOfCare. If the EpisodeOfCare does not exist, it should be updated
 */
module.exports.updateEpisodeOfCare = function updateEpisodeOfCare ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let EpisodeOfCare = require(resolveFromVersion(version, 'uscore/EpisodeOfCare'));
		// Validate the resource type before creating it
		if (EpisodeOfCare.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${EpisodeOfCare.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new EpisodeOfCare(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateEpisodeOfCare(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, EpisodeOfCare.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an EpisodeOfCare.
 */
module.exports.deleteEpisodeOfCare = function deleteEpisodeOfCare ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteEpisodeOfCare(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
