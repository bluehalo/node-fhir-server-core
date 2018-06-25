const FHIRServer = require('./index.js');
const config = require('./test.config');

let main = function () {
	let server = FHIRServer.initialize(config);
	server.logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(config.server.port);
	server.logger.info('FHIR Server listening on localhost:' + config.server.port);
};

main();
