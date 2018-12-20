/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

/**
 * @description Construct a resource with base_version/uscore path
 */
let getResourceConstructor = base_version => {
	return require(resolveFromVersion(base_version, 'Observation'));
};

/**
 * @description Controller for getting a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, version_id } = req.sanitized_args;

		let Observation = getResourceConstructor(base_version);

		return service
			.searchByVersionId(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleSingleReadResponse(res, next, base_version, Observation, results, version_id),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

module.exports.search = function search({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific bundle
		let Bundle = require(resolveFromVersion(base_version, 'Bundle'));

		return service
			.search(req.sanitized_args, req.contexts, logger)
			.then(observations => {
				let results = new Bundle({ type: 'searchset' });
				let entries = [];

				if (observations) {
					for (let resource of observations) {
						if (!req.observation || req.observation === resource.observationId) {
							// Get a version specific observation for the correct type of observation
							let Observation = getResourceConstructor(base_version);
							// Modes:
							// match - This resource matched the search specification.
							// include - This resource is returned because it is referred to from another resource in the search set.
							// outcome - An OperationOutcome that provides additional information about the processing of a search.
							entries.push({
								search: { mode: 'match' },
								resource: new Observation(resource),
								fullUrl: `${config.auth.resourceServer}/${base_version}/Observation/${resource.id}`,
							});
						}
					}
				}

				results.entry = entries;
				results.total = entries.length;

				res.status(200).json(results);
			})
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

		return service
			.searchById(req.sanitized_args, req.contexts, logger)
			.then(results => {
				let Observation = getResourceConstructor(base_version);
				responseUtils.handleSingleReadResponse(res, next, base_version, Observation, results);
			})
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for creating a observation
 */
module.exports.create = function create({ profile, logger, app, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let resource_body = req.body;
		// Get a version specific observation
		let Observation = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		if (Observation.__resourceType !== resource_body.resourceType) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Observation.__resourceType}', received '${
						resource_body.resourceType
					}'`,
					base_version,
				),
			);
		}
		// Create a new observation resource and pass it to the service
		let observation = new Observation(resource_body);
		let args = { base_version, resource: observation };
		// Pass any new information to the underlying service
		return service
			.create(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleCreateResponse(res, base_version, Observation.__resourceType, results, {
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
 * @description Controller for updating/creating a observation. If the observation does not exist, it should be updated
 */
module.exports.update = function update({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version, id } = req.sanitized_args;
		let resource_body = req.body;

		// Get a version specific observation
		let Observation = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		if (Observation.__resourceType !== resource_body.resourceType) {
			return next(
				errors.invalidParameter(
					`'resourceType' expected to have value of '${Observation.__resourceType}', received '${
						resource_body.resourceType
					}'`,
					base_version,
				),
			);
		}
		// Create a new observation resource and pass it to the service
		let observation = new Observation(resource_body);
		let args = { id, resource: observation };
		// Pass any new information to the underlying service
		return service
			.update(args, req.contexts, logger)
			.then(results =>
				responseUtils.handleUpdateResponse(res, base_version, Observation.__resourceType, results, {
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
 * @description Controller for deleting an observation resource.
 */
module.exports.remove = function remove({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		return service
			.remove(req.sanitized_args, req.contexts, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base_version, err);
			});
	};
};

/**
 * @description Controller for getting the history of a Observation resource.
 */
module.exports.history = function history({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific Observation
		let Observation = getResourceConstructor(base_version);

		return service
			.history(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Observation, results, {
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
 * @description Controller for getting the history of a Observation resource by ID.
 */
module.exports.historyById = function historyById({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		// Get a version specific Observation
		let Observation = getResourceConstructor(base_version);

		return service
			.historyById(req.sanitized_args, req.contexts, logger)
			.then(results =>
				responseUtils.handleBundleHistoryResponse(res, base_version, Observation, results, {
					resourceUrl: config.auth.resourceServer,
				}),
			)
			.catch(err => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
