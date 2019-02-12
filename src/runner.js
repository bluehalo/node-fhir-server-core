const FHIRServer = require('./index.js');
const config = require('./test.config');

let main = function() {
	let server = FHIRServer.initialize(config);
	server.logger.info('FHIR Server successfully validated.');
	// Start our server
	server.listen(3000);
	server.logger.info('FHIR Server listening on localhost:' + 3000);
};

main();
