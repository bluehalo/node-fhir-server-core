/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getMessageHeader = function getMessageHeader ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));

		return service.getMessageHeader(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, MessageHeader, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getMessageHeaderById = function getMessageHeaderById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));

		return service.getMessageHeaderById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, MessageHeader, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating MessageHeader
 */
module.exports.createMessageHeader = function createMessageHeader ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));
		// Validate the resource type before creating it
		if (MessageHeader.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MessageHeader.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new MessageHeader(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createMessageHeader(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, MessageHeader.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating MessageHeader. If the MessageHeader does not exist, it should be updated
 */
module.exports.updateMessageHeader = function updateMessageHeader ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let MessageHeader = require(resolveFromVersion(version, 'base/MessageHeader'));
		// Validate the resource type before creating it
		if (MessageHeader.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${MessageHeader.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new MessageHeader(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updateMessageHeader(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, MessageHeader.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an MessageHeader.
 */
module.exports.deleteMessageHeader = function deleteMessageHeader ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteMessageHeader(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
