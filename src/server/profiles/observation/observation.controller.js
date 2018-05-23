/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

/**
* Helper for getting the correct constructor for the various observation types
*/
let getResourceConstructor = (version, resourceType) => {
	let Observation = require(resolveFromVersion(version, 'uscore/Observation'));
	let Results = require(resolveFromVersion(version, 'uscore/Results'));
	let SmokingStatus = require(resolveFromVersion(version, 'uscore/SmokingStatus'));

	switch (resourceType) {
		case Results.__resourceType:
			return Results;
		case SmokingStatus.__resourceType:
			return SmokingStatus;
		default:
			return Observation;
	}
};

module.exports.getObservation = ({ profile, logger, config, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific bundle
		let Bundle = require(resolveFromVersion(version, 'uscore/Bundle'));

		return service.getObservation(req.sanitized_args, logger, context)
			.then((observations) => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observations) {
					for (let resource of observations) {
						if (!req.observation || req.observation === resource.observationId) {
							// Get a version specific observation for the correct type of observation
							let Observation = getResourceConstructor(version, resource.resourceType);
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Observation(resource),
								fullUrl: `${config.auth.resourceServer}/${version}/Observation/${resource.id}`
							});
						}
					}
				}

				results.entry = entries;
				results.total = entries.length;

				res.status(200).json(results);
			})
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};

};


module.exports.getObservationById = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.getObservationById(req.sanitized_args, logger)
			.then((observation) => {
				let Resource = getResourceConstructor(version, observation.resourceType);
				responseUtils.handleSingleReadResponse(req, next, version, Resource, observation);
			})
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a observation
*/
module.exports.createObservation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific observation
		let Resource = getResourceConstructor(version, resource_body.resourceType);
		// Validate the resource type before creating it
		if (Resource.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Resource.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new observation resource and pass it to the service
		let observation = new Resource(resource_body);
		let args = { id: resource_id, resource: observation };
		// Pass any new information to the underlying service
		return service.createObservation(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Resource.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a observation. If the observation does not exist, it should be updated
*/
module.exports.updateObservation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_body, resource_id } = req.sanitized_args;
		// Get a version specific observation
		let Resource = getResourceConstructor(version, resource_body.resourceType);
		// Validate the resource type before creating it
		if (Resource.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Resource.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new observation resource and pass it to the service
		let observation = new Resource(resource_body);
		let args = { id: resource_id, resource: observation };
		// Pass any new information to the underlying service
		return service.updateObservation(args, logger, context)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Resource.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting an observation resource.
*/
module.exports.deleteObservation = ({ profile, logger, app }) => {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteObservation(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(req))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
