/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getSubscription = function getSubscription ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Subscription = require(resolveFromVersion(version, 'uscore/Subscription'));

		return service.getSubscription(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Subscription, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getSubscriptionById = function getSubscriptionById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let Subscription = require(resolveFromVersion(version, 'uscore/Subscription'));

		return service.getSubscriptionById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Subscription, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating Subscription
 */
module.exports.createSubscription = function createSubscription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let Subscription = require(resolveFromVersion(version, 'uscore/Subscription'));
		// Validate the resource type before creating it
		if (Subscription.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Subscription.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new Subscription(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.createSubscription(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Subscription.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating Subscription. If the Subscription does not exist, it should be updated
 */
module.exports.updateSubscription = function updateSubscription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let Subscription = require(resolveFromVersion(version, 'uscore/Subscription'));
		// Validate the resource type before creating it
		if (Subscription.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Subscription.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let newResource = new Subscription(resource_body);
		let args = { id: resource_id, resource: newResource };
		// Pass any new information to the underlying service
		return service.updateSubscription(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Subscription.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an Subscription.
 */
module.exports.deleteSubscription = function deleteSubscription ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteSubscription(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
