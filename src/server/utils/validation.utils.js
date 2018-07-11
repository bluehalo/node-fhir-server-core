/**
 * @description Validates data. This is a stub intended to be filled out with the schemas
 * @function handleValidateResponse
 * @param {String} resource - name of resource
 * @param {Object} obj - object to test for validation.
 * @param {Object} logger
 * @returns {Object} Object of validation error; has fields: ["message", "location", "expression"]
 */
module.exports.validate = (resource, obj, logger) => {
	return new Promise((resolve, reject) => {
		let message = `Validating ${resource} in todo method.`;
		logger.info(message);
		reject(new Error(message, obj));
	});
};
