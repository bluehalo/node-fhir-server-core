/* eslint-disable */

const test_config = require('../test.config');
const { VERSIONS } = require('../constants');
const request = require('supertest');
const Server = require('./server');
const path = require('path');
const glob = require('glob');

let profileRoutes,
		server;

// Helper function to replace express params with mock values
let fillRoute = route => route.replace(':version', VERSIONS.STU3).replace(':id', 1);

describe('Generic Profile Tests', () => {

	beforeAll(() => {
		// Grab all the routes for all of our profiles
		profileRoutes = glob
			.sync('src/server/profiles/*/*.config.js')
			.map(filepath => require(path.resolve(filepath)))
			.map(config => config.routes);

		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' }});
		server = new Server(config)
			.setProfileRoutes()
			.setErrorRoutes();
	});

	test('should be able to hit all routes', async () => {
		for (let routes of profileRoutes) {
			for (let route of routes) {
				let path = fillRoute(route.path);
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
