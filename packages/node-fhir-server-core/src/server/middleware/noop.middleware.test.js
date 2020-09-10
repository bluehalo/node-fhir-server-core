const noopMiddleware = require('./noop.middleware');

describe('Noop Middleware Test', () => {
	test('should call next with no arguments', () => {
		let next = jest.fn();
		// req and res are never used, so we can safely pass in null for those
		noopMiddleware(null, null, next);
		// Next should be called exactly once
		expect(next.mock.calls.length).toBe(1);
		// Next should not be called with any arguments
		expect(next.mock.calls[0].length).toBe(0);
	});
});
