jest.mock('./middleware/version-validation.middleware.js');

const router = require('./router.js');
const path = require('path');

const passport = require('passport');
jest.mock('passport');

let app, config;

let mockServiceModule = {
	search: () => Promise.resolve(),
	aggregateResults: () => Promise.resolve(),
};

let mockOperationConfig = [
	{
		name: 'aggregate-results',
		route: '/$aggregate-results',
		method: 'POST',
	},
];

describe('Router Tests', () => {
	beforeEach(() => {
		app = {
			get: jest.fn(),
			post: jest.fn(),
			options: jest.fn(),
		};
		config = {
			server: {},
			profiles: {
				patient: {
					service: path.resolve('./src/server/profiles/service.mock.js'),
					versions: ['3_0_1'],
				},
			},
		};
	});

	test('should enable metadata routes for all versions configured', () => {
		// Add another version via a different route
		config.profiles.observation = {
			service: path.resolve('./src/server/profiles/service.mock.js'),
			versions: ['4_0_0'],
		};
		// Run the router with some defaults
		router.setRoutes({ app, config });

		expect(app.get.mock.calls).toHaveLength(1);
		expect(app.get.mock.calls[0]).toHaveLength(5);
		// Check the verison validation middleware, we mocked it above
		// It returns the options given to it so we can see which versions were
		// selected
		let versionValidationMockReturn = app.get.mock.calls[0][2];
		expect(versionValidationMockReturn.versions).toEqual(expect.arrayContaining(['3_0_1', '4_0_0']));
	});

	test('should throw for invalid profile configurations', () => {
		// Both of these errors should link them to the profile wiki
		// to help them fix the issue
		let profileWiki = 'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Profile';
		// test an invalid version
		config.profiles.patient.versions = ['2_0_0'];
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(profileWiki);
		// test an invalid profile
		config.profiles.patient.versions = ['1_0_2'];
		config.profiles.fakepatient = {};
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(profileWiki);
	});

	test('should skip routes that do not have a valid service', () => {
		// Patient at this point does not have an associated service module
		router.setRoutes({ app, config });
		// So app.get, app.post, app.options, should have at most 1 call
		// for the metadata route
		expect(app.post.mock.calls).toHaveLength(0);

		expect(app.get.mock.calls).toHaveLength(1);
		expect(app.options.mock.calls).toHaveLength(1);
		expect(app.get.mock.calls[0][0]).toBe('/:base_version/metadata');
		expect(app.options.mock.calls[0][0]).toBe('/:base_version/metadata');
	});

	test('should throw for invalid operation configurations', () => {
		// All errors should direct them to the operations wiki page
		let operationWiki = 'https://github.com/Asymmetrik/node-fhir-server-core/wiki/Operations';
		// Should throw for missing name, route, method, or a matching controller
		// Name throws first
		config.profiles.patient.operation = [{}];
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(operationWiki);
		// missing route throws next
		config.profiles.patient.operation = [{ name: 'foo-bar' }];
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(operationWiki);
		// missing operation is next
		config.profiles.patient.operation = [
			{
				name: 'foo-bar',
				route: '/$foo-bar',
			},
		];
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(operationWiki);
		// No matching service module is last
		config.profiles.patient.operation = [
			{
				name: 'foo-bar',
				route: '/$foo-bar',
				method: 'POST',
			},
		];
		expect(() => {
			router.setRoutes({ app, config });
		}).toThrowError(operationWiki);
	});

	test('should enable profile routes for valid profile configurations', () => {
		config.profiles.patient.serviceModule = mockServiceModule;
		router.setRoutes({ app, config });

		// Lets see if the patient search and metadata routes were activated
		expect(app.get.mock.calls).toHaveLength(2);
		expect(app.post.mock.calls).toHaveLength(1);
		expect(app.options.mock.calls).toHaveLength(3);
		expect(app.get.mock.calls[0][0]).toBe('/:base_version/metadata');
		expect(app.get.mock.calls[1][0]).toBe('/:base_version/patient');
		expect(app.post.mock.calls[0][0]).toBe('/:base_version/patient/_search');
		expect(app.options.mock.calls[0][0]).toBe('/:base_version/metadata');
		expect(app.options.mock.calls[1][0]).toBe('/:base_version/patient');
	});

	test('should enable operation routes for valid operation configurations', () => {
		config.profiles.patient.serviceModule = mockServiceModule;
		config.profiles.patient.operation = mockOperationConfig;
		router.setRoutes({ app, config });
		// This will also have a _search endpoint because of the mockServiceModule
		expect(app.post.mock.calls).toHaveLength(2);
		expect(app.post.mock.calls[0][0]).toBe('/:base_version/patient/([$])aggregate-results');
		expect(app.post.mock.calls[1][0]).toBe('/:base_version/patient/_search');
	});

	test('config should not be wrapped in another object before being passed to authentication middleware', () => {
		let originalEnv = process.env.NODE_ENV;
		process.env.NODE_ENV = 'development';

		config.auth = {
			strategy: {
				name: 'test',
				useSession: true,
			},
		};
		config.profiles.patient.serviceModule = mockServiceModule;
		config.profiles.patient.operation = mockOperationConfig;

		try {
			router.setRoutes({ app, config });
		} catch (e) {
			// Failed
		}

		expect(passport.authenticate.mock.calls.length).toBe(3);

		process.env.NODE_ENV = originalEnv;
	});
});
