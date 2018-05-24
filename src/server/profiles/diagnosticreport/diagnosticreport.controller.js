/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getDiagnosticReport = function getDiagnosticReport ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific diagnosticreport
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));

		return service.getDiagnosticReport(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, DiagnosticReport, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getDiagnosticReportById = function getDiagnosticReportById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific diagnosticreport
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));

		return service.getDiagnosticReportById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, DiagnosticReport, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a diagnostic_report
*/
module.exports.createDiagnosticReport = function createDiagnosticReport ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific diagnostic_report
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));
		// Validate the resource type before creating it
		if (DiagnosticReport.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${DiagnosticReport.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new diagnostic_report resource and pass it to the service
		let diagnostic_report = new DiagnosticReport(resource_body);
		let args = { id: resource_id, resource: diagnostic_report };
		// Pass any new information to the underlying service
		return service.createDiagnosticReport(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, DiagnosticReport.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a diagnostic_report. If the diagnostic_report does not exist, it should be updated
*/
module.exports.updateDiagnosticReport = function updateDiagnosticReport ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific diagnostic_report
		let DiagnosticReport = require(resolveFromVersion(version, 'uscore/DiagnosticReport'));
		// Validate the resource type before creating it
		if (DiagnosticReport.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${DiagnosticReport.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new diagnostic_report resource and pass it to the service
		let diagnostic_report = new DiagnosticReport(resource_body);
		let args = { id: resource_id, resource: diagnostic_report };
		// Pass any new information to the underlying service
		return service.updateDiagnosticReport(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, DiagnosticReport.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an DiagnosticReport resource.
*/
module.exports.deleteDiagnosticReport = function deleteDiagnosticReport ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteDiagnosticReport(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
