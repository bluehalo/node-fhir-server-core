/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getOrganization = ({ profile, logger, config, app }) => {
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
			.catch((err) => next(errors.internal(err.message, version)));
	};


};


module.exports.getOrganizationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(version, 'uscore/Organization'));

		return service.getOrganizationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, Organization, results)
			)
			.catch((err) => next(errors.internal(err.message, version)));
	};
};

/**
* @description Controller for creating a organization
*/
module.exports.createOrganization = ({ profile, logger, app }) => {
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
			.catch((err) => next(errors.internal(err.message, version)));
	};
};

/**
* @description Controller for updating/creating a organization. If the organization does not exist, it should be updated
*/
module.exports.updateOrganization = ({ profile, logger, app }) => {
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
		return service.updateOrganization(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Organization.__resourceType, results)
			)
			.catch((err) => next(errors.internal(err.message, version)));
	};
};
