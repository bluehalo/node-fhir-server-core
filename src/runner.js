const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		resourceServer: 'http://myserver.com',
		service: './src/server/utils/auth.validator.mock.js',
	},
	server: {
		port: process.env.PORT || 3000,
		corsOptions: {
			maxAge: 86400
		},
		// ssl: {
		// 	key: './src/key.pem',
		// 	cert: './src/cert.pem'
		// }
	},
	logging: {
		level: 'debug'
	},
	security: [
		{
			url: 'authorize',
			valueUri: 'https://lit-lake-71789.herokuapp.com/authorize'
		},
		{
			url: 'token',
			valueUri: 'https://lit-lake-71789.herokuapp.com/token'
		}
		// optional - registration
	],
	profiles: {
		dstu2: {
			patient: {
				service: './src/server/dstu2/patient/service.mock.js',
				corsOptions: {
					maxAge: 3600
				}
			},
			observation: {
				service: './src/server/dstu2/observation/service.mock.js',
				corsOptions: {
					maxAge: 3600
				}
			},
			oauth: {
				service: './src/server/oauth/service.mock.js' // optional if you plan to implement oauth in the same project
			}
		}
	}
};

let handler = promise => promise
	.then(data => [null, data])
	.catch(err => [err]);

let main = async function () {

	const [err, server] = await handler(fhirServer(CONFIG));

	// If something happened on initialization, handle it here
	if (err) {
		console.error(err.message);
		process.exit(1);
	} else {
		server.logger.info('FHIR Server started successfully');
	}

};

main();
