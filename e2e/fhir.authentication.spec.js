const axios = require('axios');
const got = require('got');
const qs = require('querystring');

describe('FHIR Authentication Server Tests', () => {
	// TODO: Should be managed by config files.
	const authenticationServerUrl = 'https://sb-auth.smarthealthit.org';

	test('should retrieve public key info from authentication server', () => {
		return axios.get(authenticationServerUrl + '/jwk').then(response => {
			expect(response.status).toBe(200);

			// Only one key. All of these fields are necessary to reconstruct a pem file.
			expect(response.data.keys.length).toBe(1);
			const key = response.data.keys[0];

			// Algorithm
			expect(key.alg).toBe('RS256');
			expect(key.kty).toBe('RSA');

			// Exponent
			expect(key).toHaveProperty('e');

			// Key Identifier
			expect(key).toHaveProperty('kid');

			// Power
			expect(key).toHaveProperty('n');
		});
	});

	test('should receive access code', () => {
		/*const launchParams = {
			iss: '',
			launch: 'xyz123'
		};*/

		//const authenticateUrl = 'https://sandbox.smarthealthit.org/userPersona/authenticate';
		const authenticateUrl = 'https://sb-api.smarthealthit.org/userPersona/authenticate';
		const authorizeUrl = authenticationServerUrl + '/authorize';
		const authenticateOptions = {
			username: 'johnglobal@smartdstu2',
			password: 'password'
		};
		const authorizeParams = {
			response_type: 'code',
			client_id: 'bp_centiles',
			scope: 'patient/*.read launch/patient',
			state: Math.round(Math.random() * 100000000).toString(),
			redirect_uri: 'https://sb-fhir-dstu2.smarthealthit.org/apps/bp-centiles',
			aud: 'https://sb-fhir-dstu2.smarthealthit.org/smartdstu2/data'
		};

		function authenticateUser() {
			return axios.post(authenticateUrl, authenticateOptions);
		}

		function authorizeUser() {
			return authenticateUser().then(response => {
				const cookie = response.data.jwt;

				return got(authorizeUrl + '?' + qs.stringify(authorizeParams), {
					cookie: 'hspc-persona-token=' + cookie
				});
			});
		}

		/*got('https://sb-apps.smarthealthit.org/apps/bp-centiles/launch.html?' + qs.stringify(launchParams)).then(response => {
			
			console.log(response);
		});*/
		
		return authorizeUser().then(response => {
			console.log(response);
		});
	});
});