const got = require('got'); 

describe('FHIR Authentication Server Tests', () => {
	// TODO: Should probably be managed by config files.
	const authenticationServerUrl = 'https://sb-auth.smarthealthit.org';

	test('should successfully retrieve public info from authentication server', () => {
		return got(authenticationServerUrl + '/jwk').then(response => {
			expect(response.statusCode).toBe(200);

			const body = JSON.parse(response.body);
			expect(body.keys[0].alg).toBe('RS256');

			// The public key?
			expect(body.keys[0]).toHaveProperty('n');
		});
	});


});