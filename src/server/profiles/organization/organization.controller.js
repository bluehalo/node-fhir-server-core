/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getOrganization = function getOrganization ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific organization & bundle
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));

		return service.getOrganization(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Organization, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getOrganizationById = function getOrganizationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));

		return service.getOrganizationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Organization, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a organization
*/
module.exports.createOrganization = function createOrganization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));
		// Validate the resource type before creating it
		if (Organization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Organization.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new organization resource and pass it to the service
		let organization = new Organization(resource_body);
		let args = { id: resource_id, resource: organization };
		// Pass any new information to the underlying service
		return service.createOrganization(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Organization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a organization. If the organization does not exist, it should be updated
*/
module.exports.updateOrganization = function updateOrganization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));
		// Validate the resource type before creating it
		if (Organization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Organization.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new organization resource and pass it to the service
		let organization = new Organization(resource_body);
		let args = { id: resource_id, resource: organization };
		// Pass any new information to the underlying service
		return service.updateOrganization(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Organization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an organization resource.
*/
module.exports.deleteOrganization = function deleteOrganization ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteOrganization(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
