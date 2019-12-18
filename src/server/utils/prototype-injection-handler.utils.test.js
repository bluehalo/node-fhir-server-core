/* eslint-disable */

const test_config = require('../../test.config');
const request = require('supertest');
const Server = require('../server');

let server;

describe('Prototype Injection Handler', () => {
	beforeAll(() => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config)
			.configureMiddleware()
			.setProfileRoutes()
			.setErrorRoutes();
	});

	test('it should return an operation outcome if a request body with "__proto__" comes in', async done => {
		const test =
			'{"resourceType":"Parameters","parameter":[{"name":"ndc","valueString":"00006404500","__proto__":{ "b":5}},{"name":"gcnseqno","valueString":"1417"}]}';
		request(server.app)
			.post('/3_0_1/Patient')
			.set('Accept', 'application/fhir+json')
			.set('Content-Type', 'application/fhir+json')
			.send(JSON.parse(test))
			.then(response => {
				expect(response.statusCode).toBe(400);
				expect(response.body.issue[0].details.text).toBe('Object contains forbidden prototype property');
				done();
			});
	});
});
