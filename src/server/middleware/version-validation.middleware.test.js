const versionValidationMiddleware = require('./version-validation.middleware.js');

// NOTE, these tests depend on the error utilities defaulting to a base version
// If we change how that works, we will need to revisit this middleware and
// determine what we want the default behaviour to be

describe('Version Validation Middleware', () => {
	test('should return a middleware function', () => {
		let middleware = versionValidationMiddleware();
		expect(typeof middleware).toBe('function');
	});

	test('should return an error if no base_version is present in the url', () => {
		let middleware = versionValidationMiddleware();
		let next = jest.fn();
		let req = {};
		let res = {};

		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		let operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');
	});

	test('should return an error if no profiles are available for the configured route', () => {
		let profiles = { versions: [] };
		let middleware = versionValidationMiddleware(profiles);
		let req = { params: { base_version: '1_0_2' } };
		let next = jest.fn();
		let res = {};

		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		let operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');
	});

	test('should return a not found error if the version requested is not configured', () => {
		let profiles = { versions: ['3_0_1'] };
		let middleware = versionValidationMiddleware(profiles);
		let req = { params: { base_version: '1_0_2' } };
		let next = jest.fn();
		let res = {};

		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		let operationOutcome = next.mock.calls[0][0];
		expect(operationOutcome.resourceType).toBe('OperationOutcome');
	});

	test('should call next if the version is a valid version', () => {
		let profiles = { versions: ['1_0_2'] };
		let middleware = versionValidationMiddleware(profiles);
		let req = { params: { base_version: '1_0_2' } };
		let next = jest.fn();
		let res = {};

		middleware(req, res, next);
		expect(next).toHaveBeenCalledTimes(1);
		expect(next).toHaveBeenCalledWith();
	});
});
