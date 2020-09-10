const invariant = require('./invariant.js');

let originalNodeEnv;
describe('Invariant', () => {
	beforeAll(() => {
		originalNodeEnv = process.env.NODE_ENV;
	});
	afterEach(() => {
		process.env.NODE_ENV = originalNodeEnv;
	});

	test('should not throw if given condition is truthy', () => {
		expect(() => {
			invariant(true, 'Will not throw');
		}).not.toThrow();
	});

	test('should not throw if process.env.NODE_ENV is production', () => {
		process.env.NODE_ENV = 'production';
		expect(() => {
			invariant(false, 'Will not throw');
		}).not.toThrow();
	});

	test('should throw if condition is falsy and we are not in production', () => {
		expect(() => {
			invariant(false, 'This condition is falsy');
		}).toThrow('This condition is falsy');
	});
});
