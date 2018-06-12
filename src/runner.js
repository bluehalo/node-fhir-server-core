const {VERSIONS} = require('./constants');
const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		resourceServer: 'http://myserver.com',
		service: './src/server/utils/auth.validator.mock.js',
		protectedResourceClientId: 'client',
		protectedResourceClientSecret: 'secret',
		discoveryUrl: '',
		introspectionUrl: 'https://afternoon-springs-39948.herokuapp.com/introspect'
	},
	server: {
		port: process.env.PORT || process.env.SERVER_PORT || 3000,
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
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize'
		},
		{
			url: 'token',
			valueUri: 'https://afternoon-springs-39948.herokuapp.com/token'
		}
	],
	profiles: {
		patient: {
			service: './src/server/profiles/patient/patient.service.js',
			versions: [VERSIONS.STU3]
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
