/**
 * @description Validates data. This is a stub intended to be filled out with the schemas
 * @function handleValidateResponse
 * @param {String} resource - name of resource
 * @param {Object} obj - object to test for validation.
 * @returns {Object} Object of validation error; has fields: ["message", "location", "expression"]
 */
let validate = (resource, obj) => {
	return new Promise((resolve, reject) => {
		let message = `Validating ${resource} in todo method.`;
		logger.info(message);
		reject(new Error(message));
	});
};