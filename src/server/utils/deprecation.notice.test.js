const deprecationNotice = require('./deprecation.notice.js');

describe('Deprecation Notice', () => {
	test('should log a deprecation notice when the given function is used', () => {
		let spy = jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
		let test = jest.fn();
		let message = 'Deprecated';
		// mark our function as deprecated
		let func = deprecationNotice(test, message);
		// Call our deprecated function
		func();
		expect(spy).toHaveBeenCalled();
		expect(test).toHaveBeenCalled();
		expect(spy.mock.calls).toHaveLength(1);
		expect(spy.mock.calls[0][0]).toBe(message);
		spy.mockRestore();
	});

	test('should log a deprecation notice when any function on a given object(not recursive) is used', () => {
		let spy = jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
		let test = {
			foo: jest.fn(),
			bar: jest.fn(),
			baz: 'someProp',
			obj: { one: 1 },
		};

		let message = 'Deprecated';
		// mark our function as deprecated
		let newTest = deprecationNotice(test, message);
		// Call our deprecated functions
		newTest.foo();
		newTest.bar('bar');

		expect(spy).toHaveBeenCalled();
		expect(spy.mock.calls).toHaveLength(2);
		expect(spy.mock.calls[0][0]).toBe(message);
		expect(spy.mock.calls[1][0]).toBe(message);

		expect(test.foo).toHaveBeenCalled();
		expect(test.bar).toHaveBeenCalled();
		expect(test.bar.mock.calls[0][0]).toBe('bar');

		spy.mockRestore();
	});

	test('should not replace original object, return a clone with wrapped functions', () => {
		let spy = jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
		let test = {
			foo: jest.fn(),
			bar: jest.fn(),
			baz: 'someProp',
			obj: { one: 1 },
		};

		let message = 'Deprecated';
		// mark our function as deprecated
		let newTest = deprecationNotice(test, message);

		expect(test.foo).not.toBe(newTest.foo);
		expect(test.bar).not.toBe(newTest.bar);
		expect(newTest.baz).toBe('someProp');
		expect(newTest.obj).toBe(test.obj);

		// Calling the new version should invoke the spy, while calling the original
		// should not invoke the spy, so count should only be one
		newTest.foo();
		test.foo();

		expect(spy).toHaveBeenCalled();
		expect(spy.mock.calls).toHaveLength(1);

		spy.mockRestore();
	});

	test('should pass all arguments through to deprecated function in same order', () => {
		let spy = jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
		let test = jest.fn();
		let message = 'Deprecated';
		// mark our function as deprecated
		let func = deprecationNotice(test, message);
		// Call our deprecated function with a mock parameter
		func('foo', 2, 'bar');
		expect(spy).toHaveBeenCalled();
		expect(spy.mock.calls).toHaveLength(1);
		expect(spy.mock.calls[0][0]).toBe(message);
		expect(test).toHaveBeenCalled();
		expect(test.mock.calls[0][0]).toBe('foo');
		expect(test.mock.calls[0][1]).toBe(2);
		expect(test.mock.calls[0][2]).toBe('bar');
		spy.mockRestore();
	});
});
