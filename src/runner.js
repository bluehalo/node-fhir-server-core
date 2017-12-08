const fhirServer = require('./index.js');
const path = require('path');

const CONFIG = {
	auth: {
		clientId: 'client_id',
		secret: 'secret',
		issuer: {
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
		}
	},
	server: {
		port: 3000,
		ssl: {
			key: path.resolve('./src/key.pem'),
			cert: path.resolve('./src/cert.pem')
		}
	},
	logging: {
		level: 'debug'
	},
	profiles: {
		patient: {
			service: './src/server/patient/service.mock.js'
		}
	}
};

let handler = promise => promise
	.then(data => [null, data])
	.catch(err => [err]);

let main = async function () {

	const [ err, server ] = await handler(fhirServer(CONFIG));

	// If something happened on initialization, handle it here
	if (err) {
		console.error(err.message);
		process.exit(1);
	} else {
		server.logger.info('FHIR Server started successfully');
	}

};

main();
