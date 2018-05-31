/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getPaymentReconciliation = function getPaymentReconciliation ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let PaymentReconciliation = require(resolveFromVersion(version, 'uscore/PaymentReconciliation'));

		return service.getPaymentReconciliation(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, PaymentReconciliation, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getPaymentReconciliationById = function getPaymentReconciliationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific resource
		let PaymentReconciliation = require(resolveFromVersion(version, 'uscore/PaymentReconciliation'));

		return service.getPaymentReconciliationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, PaymentReconciliation, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for creating PaymentReconciliation
 */
module.exports.createPaymentReconciliation = function createPaymentReconciliation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let PaymentReconciliation = require(resolveFromVersion(version, 'uscore/PaymentReconciliation'));
		// Validate the resource type before creating it
		if (PaymentReconciliation.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${PaymentReconciliation.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new PaymentReconciliation(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.createPaymentReconciliation(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, PaymentReconciliation.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for updating/creating PaymentReconciliation. If the PaymentReconciliation does not exist, it should be updated
 */
module.exports.updatePaymentReconciliation = function updatePaymentReconciliation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific resource
		let PaymentReconciliation = require(resolveFromVersion(version, 'uscore/PaymentReconciliation'));
		// Validate the resource type before creating it
		if (PaymentReconciliation.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${PaymentReconciliation.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new PaymentReconciliation(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.updatePaymentReconciliation(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, PaymentReconciliation.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
 * @description Controller for deleting an PaymentReconciliation.
 */
module.exports.deletePaymentReconciliation = function deletePaymentReconciliation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deletePaymentReconciliation(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
