const responseUtils = require('./response.utils');
const errors = require('./error.utils');

/**
 * @description Validates data. This is a stub intended to be filled out with the schemas
 * @function handleValidateResponse
 * @param {String} resource - name of resource
 * @param {Object} obj - object to test for validation.
 * @param {Object} logger
 * @returns {Object} Object of validation error; has fields: ["message", "location", "expression"]
 */
function validate(resource, obj, logger) {
	return new Promise((resolve, reject) => {
		let message = `Validating ${resource} in todo method.`;
		logger.info(message);
		reject(new Error(message, obj));
	});
}

/**
 * @description Controller for validating a model
 */
function validateModel(model) {
	return ({ logger }) => {
		return (req, res, next) => {
			let { base } = req.sanitized_args;

			return module.exports.validate(model, req.sanitized_args, logger)
				.then((validationErrors) => responseUtils.handleValidateResponse(res, next, base, null, validationErrors))
				.catch((err = {}) => {
					// Log the error
					logger.error(err);
					// Pass the error back
					responseUtils.handleValidateRejection(res, next, base, err);
				});
		};
	};
}

/**
 * @description Controller for validating a model by ID.
 */
function validateModelById(model) {
	return ({ profile, logger }) => {
		let { serviceModule: service } = profile;

		return (req, res, next) => {
			let { base } = req.sanitized_args;

			return service.searchById(req.sanitized_args, logger)
				.then((results) => { return module.exports.validateModel(model, results, logger); })
				.then((validationErrors) => responseUtils.handleValidateResponse(res, next, base, null, validationErrors))
				.catch((err = {}) => {
					// Log the error
					logger.error(err);
					// Pass the error back
					next(errors.internal(err.message, base));
				});
		};
	};
}

module.exports = {
	validate,
	validateModel,
	validateModelById
};

