/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');


/**
 * @description Construct a resource with base/uscore path
 */
let getResourceConstructor = (base) => {
    return require(resolveFromVersion(base, 'uscore/MedicationRequest'));
};

/**
 * @description Controller to get a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId({profile, logger, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let {base, version_id} = req.sanitized_args;
        let MedicationRequest = getResourceConstructor(base);

        return service.searchByVersionId(req.sanitized_args, logger)
            .then((results) =>
                responseUtils.handleSingleVReadResponse(res, next, base, MedicationRequest, results, version_id)
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};


/**
 * @description Controller to search medicationrequest
 */
module.exports.search = function search({profile, logger, config, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let { base } = req.sanitized_args;
        let MedicationRequest = getResourceConstructor(base);

        return service.search(req.sanitized_args, logger)
            .then((results) =>
                responseUtils.handleBundleReadResponse(res, base, MedicationRequest, results, {
                    resourceUrl: config.auth.resourceServer,
                })
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};

/**
 * @description Controller to searchById medicationrequest
 */
module.exports.searchById = function searchById({profile, logger, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let { base } = req.sanitized_args;
        let MedicationRequest = getResourceConstructor(base);

        return service.searchById(req.sanitized_args, logger)
            .then((results) => {
                responseUtils.handleSingleReadResponse(res, next, base, MedicationRequest, results);
            })
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};

/**
 * @description Controller for creating a medicationrequest
 */
module.exports.create = function create({profile, logger, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let {base, resource_id, resource_body = {}} = req.sanitized_args;
        let MedicationRequest = getResourceConstructor(base);
        // Validate the resource type before creating it
        if (MedicationRequest.__resourceType !== resource_body.resourceType) {
            return next(errors.invalidParameter(
                `'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
                base
            ));
        }
        // Create a new medicationrequest resource and pass it to the service
        let medicationrequest = new MedicationRequest(resource_body);
        let args = {id: resource_id, resource: medicationrequest};
        // Pass any new information to the underlying service
        return service.create(args, logger)
            .then((results) =>
                responseUtils.handleCreateResponse(res, base, MedicationRequest.__resourceType, results)
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};

/**
 * @description Controller for updating/creating a medicationrequest. If the medicationrequest does not exist, it should be updated
 */
module.exports.update = function update({profile, logger, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let {base, id, resource_body = {}} = req.sanitized_args;
        let MedicationRequest = getResourceConstructor(base);
        // Validate the resource type before creating it
        if (MedicationRequest.__resourceType !== resource_body.resourceType) {
            return next(errors.invalidParameter(
                `'resourceType' expected to have value of '${MedicationRequest.__resourceType}', received '${resource_body.resourceType}'`,
                base
            ));
        }
        // Create a new medicationrequest resource and pass it to the service
        let medicationrequest = new MedicationRequest(resource_body);
        let args = {id, resource: medicationrequest};
        // Pass any new information to the underlying service
        return service.update(args, logger)
            .then((results) =>
                responseUtils.handleUpdateResponse(res, base, MedicationRequest.__resourceType, results)
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};

/**
 * @description Controller for deleting an medicationrequest resource.
 */
module.exports.remove = function remove({profile, logger, app}) {
    let {serviceModule: service} = profile;

    return (req, res, next) => {
        let { base } = req.sanitized_args;

        return service.remove(req.sanitized_args, logger)
            .then(() => responseUtils.handleDeleteResponse(res))
            .catch((err = {}) => {
                // Log the error
                logger.error(err);
                // Pass the error back
                responseUtils.handleDeleteRejection(res, next, base, err);
            });
    };
};

/**
 * @description Controller for getting the history of MedicationRequest resource.
 */
module.exports.history = function history ({ profile, logger }) {
    let { serviceModule: service } = profile;

    return (req, res, next) => {
        let { base } = req.sanitized_args;
        // Get a version specific ActivityDefinition
        let MedicationRequest = getResourceConstructor(base);

        return service.history(req.sanitized_args, logger)
            .then((results) =>
                responseUtils.handleBundleReadResponse( res, base, MedicationRequest, results)
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};

/**
 * @description Controller for getting the history of MedicationRequest resource by ID.
 */
module.exports.historyById = function historyById ({ profile, logger }) {
    let { serviceModule: service } = profile;

    return (req, res, next) => {
        let { base } = req.sanitized_args;
        // Get a version specific ActivityDefinition
        let MedicationRequest = getResourceConstructor(base);

        return service.historyById(req.sanitized_args, logger)
            .then((results) =>
                responseUtils.handleBundleReadResponse( res, base, MedicationRequest, results)
            )
            .catch((err) => {
                logger.error(err);
                next(errors.internal(err.message, base));
            });
    };
};
