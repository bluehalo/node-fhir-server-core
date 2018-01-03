const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		clientId: 'client_id',
		secret: 'secret',
		issuer: {
			uri: 'https://lit-lake-71789.herokuapp.com',
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
		}
	},
	server: {
		port: 3000,
		// ssl: {
		// 	key: path.resolve('./src/key.pem'),
		// 	cert: path.resolve('./src/cert.pem')
		// }
	},
	logging: {
		level: 'debug'
	},
	// security: [
	// 	{
	// 		url: 'authorize',
	// 		valueUri: 'https://lit-lake-71789.herokuapp.com/authorize'
	// 	},
	// 	{
	// 		url: 'token',
	// 		valueUri: 'https://lit-lake-71789.herokuapp.com/token'
	// 	}
	// 	// optional - registration
	// ],
	profiles: {
		patient: {
			service: './src/services/patient.service.js'
		},
		observation: {
			service: './src/services/observation.service.js'
		},
		oauth: {
			service: './src/services/oauthstub.service.js' // optional if you plan to implement oauth in the same project
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
