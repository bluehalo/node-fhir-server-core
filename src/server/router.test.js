jest.mock('./middleware/version-validation.middleware.js');

const router = require('./router.js');
const path = require('path');

let app, config;

describe('Router Tests', () => {
	beforeEach(() => {
		app = {
			get: jest.fn(),
			post: jest.fn(),
			options: jest.fn()
		};
		config = {
			server: {},
			profiles: {
				patient: {
					service: path.resolve('./src/server/profiles/service.mock.js'),
					versions: ['3_0_1']
				}
			}
		};
	});

	test('should enable metadata routes for all versions configured', () => {
		// Add another version via a different route
		config.profiles.observation = {
			service: path.resolve('./src/server/profiles/service.mock.js'),
			versions: ['4_0_0']
		};
		// Run the router with some defaults
		router.setRoutes({ app, config });

		expect(app.get.mock.calls).toHaveLength(1);
		expect(app.get.mock.calls[0]).toHaveLength(5);
		// Check the verison validation middleware, we mocked it above
		// It returns the options given to it so we can see which versions were
		// selected
		let versionValidationMockReturn = app.get.mock.calls[0][2];
		expect(versionValidationMockReturn.versions).toEqual(
			expect.arrayContaining(['3_0_1', '4_0_0'])
		);
	});

	test('should throw for invalid profile configurations', () => {

	});

	test('should throw for invalid operation configurations', () => {

	});

	test('should enable profile routes for valid profile configurations', () => {

	});

	test('should enable operation routes for valid operation configurations', () => {

	});
});
