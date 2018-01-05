const Server = require('./server/server');
const mongo = require('./services/mongo.client');

/**
 * @name exports
 * @description Export a function to generate a FHIR compatible server
 * @param {Object} config - FHIR Server configuration object
 */
module.exports = (config) => new Promise((resolve, reject) => {
	let server;
	// Create our FHIR server
	try {
		// start mongo
		mongo.initializeMongo();

		server = new Server(config);
	} catch (err) {
		reject(err);
	}

	// Start our server
	return server.start().then(resolve).catch(reject);
});
