/* eslint-disable */
const moment = require('moment-timezone');
const test_config = require('../../test.config');
const { VERSIONS } = require('../../constants');
const request = require('supertest');
const Server = require('../server');
const resolve_utils = require('../utils/resolve.utils');
const path = require('path');
let server;

// Helper function to replace express params with mock values
let fillRoute = (route, key) =>
	route
		.replace(':base_version', VERSIONS['3_0_1'])
		.replace(':id', 1)
		.replace(':resource', key);

//Helper function build a custom security statement
customSecurityStatement = securityUrls => ({
	cors: true,
	service: [
		{
			coding: [
				{
					system: 'http://hl7.org/fhir/restful-security-service',
					code: 'SMART-on-FHIR',
				},
			],
			text: 'Custom OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)',
		},
	],
	extension: [
		{
			url: 'http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris',
			extension: securityUrls,
		},
	],
});

//Helper function to build a custom capability statement
customCapabilityStatement = function(resources) {
	let CapabilityStatement = require(resolve_utils.resolveFromVersion('3_0_1', 'CapabilityStatement'));

	return new CapabilityStatement({
		status: 'active',
		date: moment()
			.tz('America/New_York')
			.format(),
		publisher: 'Not provided',
		kind: 'instance',
		software: {
			name: 'FHIR Server',
			version: '0.0.1',
		},
		implementation: {
			description: 'FHIR Custom Server (STU3)',
		},
		fhirVersion: '3.0.1',
		acceptUnknown: 'extensions',
		format: ['application/fhir+json'],
		rest: [resources],
	});
};

//A custom statementGenerator getter
let customGetStatementGenerators = (args, logger) => {
	return {
		makeStatement: customCapabilityStatement,
		securityStatement: customSecurityStatement,
	};
};

//A function to make a custom resource conformance statement
let customMakeResource = (args, logger) => {
	let Resource = require(resolve_utils.resolveFromVersion(args.base_version, args.key));

	// Return our conformance statement
	return {
		type: Resource.__resourceType,
		profile: {
			reference: `http://example.org/fhir/${args.key}.html`,
		},
		conditionalDelete: 'not-supported',
		searchParam: [
			{
				name: '_id',
				type: 'token',
				documentation: 'The ID of the resource',
			},
		],
	};
};

describe('Conformance Tests', () => {
	test('Test that the server returns a default capability statement', async () => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');
		expect(response.body.implementation.description).toBe('FHIR Test Server (STU3)');
	}, 60000);

	test('Test that the server returns a default security statement', async () => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		config.security = [
			{
				url: 'authorize',
				valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize',
			},
			{
				url: 'token',
				valueUri: 'https://afternoon-springs-39948.herokuapp.com/token',
			},
		];
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');

		let security = response.body.rest[0].security;
		expect(security.service[0].text).toBe('OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)');
	}, 60000);

	test('Test that the server returns a custom security statement', async () => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		config.security = [
			{
				url: 'authorize',
				valueUri: 'https://afternoon-springs-39948.herokuapp.com/authorize',
			},
			{
				url: 'token',
				valueUri: 'https://afternoon-springs-39948.herokuapp.com/token',
			},
		];
		config.statementGenerator = customGetStatementGenerators;
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');

		let security = response.body.rest[0].security;
		expect(security.service[0].text).toBe(
			'Custom OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org)',
		);
	}, 60000);

	test('Test that the server returns a custom capability statement', async () => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		config.statementGenerator = customGetStatementGenerators;
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');
		expect(response.body.implementation.description).toBe('FHIR Custom Server (STU3)');
	}, 60000);

	test('Test that every profile gets a default resource entry ', async () => {
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');
		//Check that the reference for each resource is the default
		for (let key of keys) {
			let resource = response.body.rest[0].resource.find(rsc => rsc.type === key);
			expect(resource.profile.reference).toBe(`http://hl7.org/fhir/${key}.html`);
		}
	}, 60000);

	test('Test that every profile gets a custom resource entry ', async () => {
		//Add a custom make resource to the test services
		let mock_service = require('../profiles/service.mock.js');
		mock_service.makeResource = customMakeResource;
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		let { routes } = require('../route.config');

		//Patch the test config to include our custom makeResource
		for (let key of keys) {
			server.config.profiles[key].service = mock_service;
		}
		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');
		//Check the reference for each resource is the customised one
		for (let key of keys) {
			let account_resource = response.body.rest[0].resource.find(rsc => rsc.type === key);
			expect(account_resource.profile.reference).toBe(`http://example.org/fhir/${key}.html`);
		}
	}, 60000);

	test('Test that every profile gets a custom resource entry from config', async () => {
		//Add a custom make resource to the test services
		let mock_service = require('../profiles/service.mock.js');
		mock_service.makeResource = customMakeResource;
		// Standup a basic server
		let config = Object.assign({}, test_config, { logging: { level: 'emerg' } });
		server = new Server(config).setProfileRoutes().setErrorRoutes();

		let keys = Object.keys(server.config.profiles);
		//Patch the test config to include our custom metadata module
		for (let key of keys) {
			server.config.profiles[key].metadata = path.resolve(__dirname, 'metadata.test.metadata.js');
		}

		let { routes } = require('../route.config');

		let response = await request(server.app)['get']('/3_0_1/metadata');
		expect(response.body.resourceType).toBe('CapabilityStatement');
		//Check the reference for each resource is the customised one
		for (let key of keys) {
			let account_resource = response.body.rest[0].resource.find(rsc => rsc.type === 'Foobar');
			expect(account_resource.profile.reference).toBe(
				`https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1`,
			);
		}
	}, 60000);
});
