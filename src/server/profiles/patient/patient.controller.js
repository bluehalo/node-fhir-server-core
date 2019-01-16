/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

/**
 * @description Construct a resource with base_version/uscore path
 */
let getResourceConstructor = base_version => {
	return require(resolveFromVersion(base_version, 'Patient'));
};

/**
 * @description Filter function for only allowing a certain patient to be
 * accessed if a patient id is present on the req object. user_id is req.patient
 * currently so if that value is present, they should only see patients whose
 * id matches.
 */
let patient_filter = function(user_id) {
	// TODO: Is this ever going to work, user_id is from them logging in
	// with SMART and since we do not know if that id matches whatever id
	// the EHR has, how can we verify they are the same
	return patient => !user_id || user_id === patient.id;
};

/**
 * @description Controller for getting a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, version_id } = req.sanitized_args;

		let Patient = getResourceConstructor(base_version);

		return service
			.searchByVersionId(req.sanitized_args, req.contexts, logger)
			.then(results => responseUtils.handleSingleReadResponse(res, next, base_version, Patient, results, version_id))
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

module.exports.search = function search({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));

		return service
			.search(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleReadResponse(res, base_version, Patient, results, {
					resourceUrl: config.auth.resourceServer,
					filter: patient_filter(req.patient),
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

module.exports.searchById = function searchById({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));

		return service
			.searchById(req.sanitized_args, req.contexts, logger)
			.then(results => responseUtils.handleSingleReadResponse(res, next, base_version, Patient, results))
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for creating a patient
 */
module.exports.create = function create({ profile, logger, app, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let resource_body = req.body;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Patient.__resourceType}', received '${
						resource_body.resourceType
					}'`,
					base_version,
				),
			);
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { base_version, resource: patient };
		// Pass any new information to the underlying service
		return service
			.create(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleCreateResponse(res, base_version, Patient.__resourceType, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for updating/creating a patient. If the patient does not exist, it should be updated
 */
module.exports.update = function update({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, id } = req.sanitized_args;
		let resource_body = req.body;

		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));
		// Validate the resource type before creating it
		if (Patient.__resourceType !== resource_body.resourceType) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Patient.__resourceType}', received '${
						resource_body.resourceType
					}'`,
					base_version,
				),
			);
		}
		// Create a new patient resource and pass it to the service
		let patient = new Patient(resource_body);
		let args = { id, base_version, resource: patient };
		// Pass any new information to the underlying service
		return service
			.update(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleUpdateResponse(res, base_version, Patient.__resourceType, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for deleting a patient resource.
 */
module.exports.remove = function remove({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		return service
			.remove(req.sanitized_args, req.contexts, logger)
			.then(results => responseUtils.handleDeleteResponse(res, results))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base_version, err);
			});
	};
};

/**
 * @description Controller for getting the history of a Patient resource.
 */
module.exports.history = function history({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));

		return service
			.history(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Patient, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for getting the history of a Patient resource by ID.
 */
module.exports.historyById = function historyById({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));

		return service
			.historyById(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Patient, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for patch updating a patient. If the patient does not exist, it should be updated
 */
//TODO This is currenlty for JSON patch. See documentation (https://www.hl7.org/fhir/http.html#patch)
//TODO Can have this behave differently based on the supplied content type.
//TODO currently, only requests of type 'fhir+json' will come through.
module.exports.patch = function patch({ profile, logger, config }) {
	let { serviceModule: service } = profile;
	return (req, res, next) => {
		let patchContent = req.body;
		let { base_version, id } = req.sanitized_args;

		// Get a version specific patient
		let Patient = require(resolveFromVersion(base_version, 'Patient'));

		let args = { id, base_version, patchContent };
		// Pass any new information to the underlying service
		return service
			.patch(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleUpdateResponse(res, base_version, Patient.__resourceType, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
