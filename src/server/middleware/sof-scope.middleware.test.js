const sofScopeMiddleware = require('./sof-scope.middleware.js');

describe('Smart on FHIR Scope Middleware', () => {
	test('should return noOpMiddleware if NODE_ENV is test', () => {});

	test('should return noOpMiddleware if auth type is not smart', () => {});

	test('should return noOpMiddleware if not auth config is given', () => {});

	test('should assign the correct action per interaction', () => {});

	test('should invoke next with an error if the scopes are not valid', () => {});

	test('should default to * for permission if invalid interaction is given', () => {});

	test('should call next without error if scopes are valid', () => {});
});
