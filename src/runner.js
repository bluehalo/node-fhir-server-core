const fhirServer = require('./index.js');

const CONFIG = {
	auth: {
		clientId: 'client id',
		secret: 'secret',
		discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',

		protectedResourceClientId: 'ae83b0eb-35ed-483b-a933-edb2277f4aad',
		protectedResourceClientSecret: 'AK1MPC0PT44icz7awMie4Pasd9BOMcJ6rTAazq2Ni01nQLecxqqtrcXKrz4bciQOaL5tjclmSKO064u9n1IoDzE'

		// If there is no discovery url, these values must be provided.
		/*
		authorization_endpoint: 'https://sb-auth.smarthealthit.org/authorize',
		token_endpoint: 'https://sb-auth.smarthealthit.org/token',
		registration_endpoint: 'https://sb-auth.smarthealthit.org/register',
		introspection_endpoint: 'https://sb-auth.smarthealthit.org/introspect',
		issuer: 'https://sb-auth.smarthealthit.org/',
		*/

		// If there is a public key and introspection is not used, these values must be provided.
		/*
		jwkSet: {
			keys: [{
				"kty": "RSA",
				"e": "AQAB",
				"kid": "rsa1",
				"alg": "RS256",
				"n": "qt6yOiI_wCoCVlGO0MySsez0VkSqhPvDl3rfabOslx35mYEO-n4ABfIT5Gn2zN-CeIcOZ5ugAXvIIRWv5H55-tzjFazi5IKkOIMCiz5__MtsdxKCqGlZu2zt-BLpqTOAPiflNPpM3RUAlxKAhnYEqNha6-allPnFQupnW_eTYoyuzuedT7dSp90ry0ZcQDimntXWeaSbrYKCj9Rr9W1jn2uTowUuXaScKXTCjAmJVnsD75JNzQfa8DweklTyWQF-Y5Ky039I0VIu-0CIGhXY48GAFe2EFb8VpNhf07DP63p138RWQ1d3KPEM9mYJVpQC68j3wzDQYSljpLf9by7TGw"
			}]
		}
		*/
	},
	server: {
		port: 3000,
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
