const Server = require('./server/server');

/**
 * @name exports
 * @description Export a function to generate a FHIR server
 * @param {Object} config - FHIR Server configuration object
 */
module.exports = (config) => new Promise((resolve, reject) => {
	let server;
	// Create FHIR server
	try {
		server = new Server(config);
	} catch (err) {
		reject(err);
	}

	// Start server
	return server.start().then(resolve).catch(reject);
});
