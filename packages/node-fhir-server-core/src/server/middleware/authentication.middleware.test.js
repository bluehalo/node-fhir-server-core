const authenticationMiddleware = require('./authentication.middleware.js');
const noopMiddleware = require('./noop.middleware.js');
const passport = require('passport');

let originalEnv;

let config = {
	auth: {
		strategy: {
			name: 'test',
			useSession: true,
		},
	},
};

describe('Authentication Middleware Test', () => {
	beforeEach(() => {
		originalEnv = Object.assign({}, process.env);
	});

	afterEach(() => {
		process.env.NODE_ENV = originalEnv;
	});

	test('should return noop middleware for tests', () => {
		let middleware = authenticationMiddleware({});
		expect(middleware).toBe(noopMiddleware);
	});

	test('should return noop middleware if no auth config is provided', () => {
		process.env.NODE_ENV = 'production';
		let middleware = authenticationMiddleware({});
		expect(middleware).toBe(noopMiddleware);
	});

	test('should call passport authenticate when given an auth config', () => {
		process.env.NODE_ENV = 'production';
		let middleware = authenticationMiddleware(config);
		let mock = passport.authenticate.mock;

		expect(middleware).not.toBe(noopMiddleware);
		expect(mock.calls).toHaveLength(1);
		expect(mock.calls[0][0]).toBe(config.auth.strategy.name);
		expect(mock.calls[0][1].session).toBeTruthy();
	});

	test('should default session to false if none is provided', () => {
		process.env.NODE_ENV = 'production';
		let newConfig = Object.assign({}, config, {
			auth: { strategy: { name: 'default' } },
		});

		let middleware = authenticationMiddleware(newConfig);
		let mock = passport.authenticate.mock;

		expect(middleware).not.toBe(noopMiddleware);
		expect(mock.calls).toHaveLength(1);
		expect(mock.calls[0][0]).toBe(newConfig.auth.strategy.name);
		expect(mock.calls[0][1].session).toBeFalsy();
	});
});
