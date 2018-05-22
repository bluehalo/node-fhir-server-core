/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getAllergyIntolerance = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific allergyintolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntolerance(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, AllergyIntolerance, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getAllergyIntoleranceById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific allergyintolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));

		return service.getAllergyIntoleranceById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(req, next, version, AllergyIntolerance, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a allergy_intolerance
*/
module.exports.createAllergyIntolerance = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific allergy_intolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));
		// Validate the resource type before creating it
		if (AllergyIntolerance.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AllergyIntolerance.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new allergy_intolerance resource and pass it to the service
		let allergy_intolerance = new AllergyIntolerance(resource_body);
		let args = { id: resource_id, resource: allergy_intolerance };
		// Pass any new information to the underlying service
		return service.createAllergyIntolerance(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, AllergyIntolerance.__resourceType, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a allergy_intolerance. If the allergy_intolerance does not exist, it should be updated
*/
module.exports.updateAllergyIntolerance = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific allergy_intolerance
		let AllergyIntolerance = require(resolveFromVersion(version, 'uscore/AllergyIntolerance'));
		// Validate the resource type before creating it
		if (AllergyIntolerance.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${AllergyIntolerance.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new allergy_intolerance resource and pass it to the service
		let allergy_intolerance = new AllergyIntolerance(resource_body);
		let args = { id: resource_id, resource: allergy_intolerance };
		// Pass any new information to the underlying service
		return service.updateAllergyIntolerance(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, AllergyIntolerance.__resourceType, results)
			)
			.catch((err) => {
				logger.error('Internal Error: ', err);
				next(errors.internal(err.message, version));
			});
	};
};
