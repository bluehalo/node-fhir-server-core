/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getPaymentNotice = function getPaymentNotice ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let PaymentNotice = require(resolveFromVersion(version, 'base/PaymentNotice'));

		return service.getPaymentNotice(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, PaymentNotice, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getPaymentNoticeById = function getPaymentNoticeById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let PaymentNotice = require(resolveFromVersion(version, 'base/PaymentNotice'));

		return service.getPaymentNoticeById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, PaymentNotice, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating PaymentNotice
 */
module.exports.createPaymentNotice = function createPaymentNotice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let PaymentNotice = require(resolveFromVersion(version, 'base/PaymentNotice'));
		// Validate the resource type before creating it
		if (PaymentNotice.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${PaymentNotice.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new PaymentNotice(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createPaymentNotice(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, PaymentNotice.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating PaymentNotice. If the PaymentNotice does not exist, it should be updated
 */
module.exports.updatePaymentNotice = function updatePaymentNotice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let PaymentNotice = require(resolveFromVersion(version, 'base/PaymentNotice'));
		// Validate the resource type before creating it
		if (PaymentNotice.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${PaymentNotice.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new PaymentNotice(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updatePaymentNotice(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, PaymentNotice.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an PaymentNotice.
 */
module.exports.deletePaymentNotice = function deletePaymentNotice ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deletePaymentNotice(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
