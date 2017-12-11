
/**
 * @function generateCapabilityStatement
 * @description Assemble the capability statement based on the current profiles
 * @param {Object} profiles - List of profile services we are using
 * @param {Winston} logger - Instance of Winston's logger
 * @return {Object} - capability statement
 */
let generateCapabilityStatement = (profiles, logger) => new Promise((resolve, reject) => {
	logger.info('Metadata.generateCapabilityStatement');
	return resolve({ foo: 'bar' });
});

/**
 * @name exports
 * @summary Metadata service
 */
module.exports = {
	generateCapabilityStatement
};
