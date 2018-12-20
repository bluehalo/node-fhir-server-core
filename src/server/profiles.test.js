/* eslint-disable */

const test_config = require('../test.config');
const { VERSIONS } = require('../constants');
const request = require('supertest');
const Server = require('./server');

let server;

// Helper function to replace express params with mock values
let fillRoute = (route, key) =>
	route
		.replace(':base_version', VERSIONS['3_0_1'])
		.replace(':id', 1)
		.replace(':resource', key);

describe('Generic Profile Tests', () => {
	beforeAll(() => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config).setProfileRoutes().setErrorRoutes();
	});

	test('should be able to hit all routes', async () => {
		let keys = Object.keys(server.config.profiles);
		let { routes } = require('./route.config');

		for (let key of keys) {
			for (let route of routes) {
				let path = fillRoute(route.path, key);
				let method = route.type;
				let response = await request(server.app)[method](path);

				// Since we are not implementing services, these should all result in errors
				expect(response.statusCode).not.toBe(200);

				// Check that the resulting error is an OperationOutcome
				let err = JSON.parse(response.error.text);
				expect(err.resourceType).toBe('OperationOutcome');
				expect(err.issue).toHaveLength(1);

				// Make sure the severity is error
				let issue = err.issue[0];
				expect(issue.severity).toBe('error');
			}
		}
	}, 60000);
});
