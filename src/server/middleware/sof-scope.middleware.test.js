const sofScopeMiddleware = require('./sof-scope.middleware.js');
const noOpMiddleware = require('./noop.middleware.js');

let env;

describe('Smart on FHIR Scope Middleware', () => {
	beforeAll(() => {
		env = Object.assign({}, process.env);
	});

	afterEach(() => {
		process.env = env;
	});

	test('should return noOpMiddleware if NODE_ENV is test', () => {
		process.env.NODE_ENV = 'test';
		let middleware = sofScopeMiddleware();
		expect(middleware).toBe(noOpMiddleware);
	});

	test('should return noOpMiddleware if auth type is not smart', () => {
		process.env.NODE_ENV = 'production';
		let options = {
			auth: {
				type: 'not-smart',
			},
		};

		let middleware = sofScopeMiddleware(options);
		expect(middleware).toBe(noOpMiddleware);
	});

	test('should return noOpMiddleware if not auth config is given', () => {
		process.env.NODE_ENV = 'production';
		let options = {
			auth: {
				type: 'smart',
			},
		};

		let middleware = sofScopeMiddleware(options);
		expect(middleware).toBe(noOpMiddleware);
	});

	test('should invoke next with an error if the scopes are not valid', () => {
		process.env.NODE_ENV = 'production';
		let options = {
			auth: {
				type: 'smart',
				strategy: {
					name: 'bearer',
					service: 'path/to/strategy.js',
				},
			},
			route: {
				interaction: 'search',
			},
			name: 'patient',
		};

		let next = jest.fn();
		let req = { user: { scope: '' } };
		let res = {};

		let middleware = sofScopeMiddleware(options);
		expect(middleware).not.toBe(noOpMiddleware);
		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		let operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');

		// We should see the same result if the user is not present at all
		next.mockReset();
		middleware({}, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');
	});

	test('should default to * for permission if invalid interaction is given', () => {
		process.env.NODE_ENV = 'production';
		let options = {
			auth: {
				type: 'smart',
				strategy: {
					name: 'bearer',
					service: 'path/to/strategy.js',
				},
			},
			route: {
				interaction: 'foobar',
			},
			name: 'patient',
		};

		let next = jest.fn();
		let req = { user: { scope: '' }, params: { version: '1_0_2' } };
		let res = {};

		let middleware = sofScopeMiddleware(options);
		expect(middleware).not.toBe(noOpMiddleware);
		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		let operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');
	});

	test('should call next without error if scopes are valid', () => {
		process.env.NODE_ENV = 'production';
		let options = {
			auth: {
				type: 'smart',
				strategy: {
					name: 'bearer',
					service: 'path/to/strategy.js',
				},
			},
			route: {
				interaction: 'create',
			},
			name: 'patient',
		};

		let next = jest.fn();
		let req = { user: { scope: 'patient/*.write' } };
		let res = {};

		let middleware = sofScopeMiddleware(options);
		expect(middleware).not.toBe(noOpMiddleware);
		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		expect(next).toHaveBeenCalledWith();
	});
});
