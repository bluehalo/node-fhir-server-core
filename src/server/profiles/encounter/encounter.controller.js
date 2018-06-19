/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.search = function search ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));

		return service.search(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Encounter, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.searchById = function searchById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));

		return service.searchById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Encounter, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating Encounter
 */
module.exports.create = function create ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));
		// Validate the resource type before creating it
		if (Encounter.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Encounter.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Encounter(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.create(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Encounter.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating Encounter. If the Encounter does not exist, it should be updated
 */
module.exports.update = function update ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let Encounter = require(resolveFromVersion(version, 'base/Encounter'));
		// Validate the resource type before creating it
		if (Encounter.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Encounter.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Encounter(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.update(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Encounter.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an Encounter.
 */
module.exports.remove = function remove ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.remove(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};

/**
* @description Controller for getting the history of a Encounter resource.
*/
module.exports.history = function history ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific Encounter
		let Encounter = require(resolveFromVersion(version, 'uscore/Encounter'));

		return service.history(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Encounter, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for getting the history of a Encounter resource by ID.
*/
module.exports.historyById = function historyById ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific Encounter
		let Encounter = require(resolveFromVersion(version, 'uscore/Encounter'));

		return service.historyById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Encounter, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

