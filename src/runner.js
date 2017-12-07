const fhirServer = require('./index.js');
const path = require('path');

const CONFIG = {
	auth: {
		clientId: 'client_id',
		secret: 'secret',
		issuer: {
			discoveryUrl: 'https://sb-auth.smarthealthit.org/.well-known/openid-configuration',
			// oauthConfig: {
			// 	authorization_endpoint: 'https://sb-auth.smarthealthit.org/authorize',
			// 	token_endpoint: 'https://sb-auth.smarthealthit.org/token',
			// 	registration_endpoint: 'https://sb-auth.smarthealthit.org/register',
			// 	introspection_endpoint: 'https://sb-auth.smarthealthit.org/introspect',
			// 	issuer: 'https://sb-auth.smarthealthit.org/'
			// },
			// jwkSet: {
			// 	keys: [{
			// 		kty: 'RSA',
			// 		e: 'AQAB',
			// 		kid: 'rsa1',
			// 		alg: 'RS256',
			// 		n: 'qt6yOiI_wCoCVlGO0MySsez0VkSqhPvDl3rfabOslx35mYEO-n4ABfIT5Gn2zN-CeIcOZ5ugAXvIIRWv5H55-tzjFazi5IKkOIMCiz5__MtsdxKCqGlZu2zt-BLpqTOAPiflNPpM3RUAlxKAhnYEqNha6-allPnFQupnW_eTYoyuzuedT7dSp90ry0ZcQDimntXWeaSbrYKCj9Rr9W1jn2uTowUuXaScKXTCjAmJVnsD75JNzQfa8DweklTyWQF-Y5Ky039I0VIu-0CIGhXY48GAFe2EFb8VpNhf07DP63p138RWQ1d3KPEM9mYJVpQC68j3wzDQYSljpLf9by7TGw'
			// 	}]
			// }
		}
	},
	server: {
		port: 3000,
		// @TODO Implement this
		sessionStore: null,
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
			service: 'foo', // Required as a string or module
			resolver: 'bar' // Required as a string or module
		},
		observation: {
			service: '', // Required as a string or module
			resolver: '' // Required as a string or module
		}
	}
};

let handler = promise => promise.then(data => [data]).catch(err => [null, err]);

let main = async function () {
	/* eslint-disable no-unused-vars */
	const [server, err] = await handler(fhirServer(CONFIG));
	/* eslint-enable no-unused-vars */

	// If something happened on initialization, handle it here
	if (err) {
		process.exit(err);
	}

};

main();
