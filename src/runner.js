const fhirServer = require('./index.js');
const path = require('path');

const CONFIG = {
	auth: {
		clientId: undefined,
		secret: 'secret',
		discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',

		protectedResourceClientId: 'ae83b0eb-35ed-483b-a933-edb2277f4aad',
    protectedResourceClientSecret: 'AK1MPC0PT44icz7awMie4Pasd9BOMcJ6rTAazq2Ni01nQLecxqqtrcXKrz4bciQOaL5tjclmSKO064u9n1IoDzE'
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
