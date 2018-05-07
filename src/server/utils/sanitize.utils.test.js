const moment = require('moment');
const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { VERSIONS } = require(path.resolve('./src/constants'));

const ARGS_PARAM = {
	version: VERSIONS.STU3
};

const ARGS = [
	{
		name: 'first_name',
		type: 'string'
	},
	{
		name: 'birthdate',
		type: 'date'
	},
	{
		name: 'isAlive',
		type: 'boolean'
	},
	{
		name: 'age',
		type: 'number'
	},
	{
		name: 'identifier',
		type: 'string'
	}
];

const REQUIRED_ARGS = [
	{
		name: 'id',
		type: 'string',
		required: true
	}
];

const INVALID_TYPE_ARGS = [
	{
		name: 'age',
		type: 'integer'
	}
];

describe('Sanitize Utils Tests', () => {

	test('should not pass an error if no args are provided and none are required', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let req = { params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		// Make sure next was called but without an error
		expect(next).toHaveBeenCalled();
		expect(next.mock.calls[0][0]).toBeUndefined();
	});

	test('should coerce the arguments into the correct type', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let params = { first_name: 'Joe', age: '24', birthdate: '740088404220', isAlive: 'true' };
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		// Inspect params and make sure they are the correct type
		let { first_name, age, birthdate, isAlive } = req.params;
		expect(typeof first_name).toEqual('string');
		expect(typeof isAlive).toEqual('boolean');
		expect(typeof age).toEqual('number');
		// birthdate should be a moment object
		expect(birthdate.isValid()).toBeTruthy();
		expect(birthdate).toBeInstanceOf(moment);
		// Make sure next was called but without an error
		expect(next).toHaveBeenCalled();
		// This should be the argument next would be invoked with
		// calls[0] is the first set of arguments, calls[0][0] is the first argument
		expect(next.mock.calls[0][0]).toBeUndefined();
	});

	test('should accept a different format for date types', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let query = { birthdate: '2017-03-01T13:10:00' };
		let req = { query, params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		expect(req.query.birthdate.isValid()).toBeTruthy();
		expect(req.query.birthdate).toBeInstanceOf(moment);
	});

	test('should filter out extra arguments that do not belong', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let body = { id: 'john-doe', age: '24', birthdate: '740088404220', isAlive: 'true' };
		let req = { body, params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		// only id should be passed through
		expect(typeof req.body.id).toEqual('string');
		expect(req.body.id).toEqual('john-doe');
		expect(req.body.birthdate).toBeUndefined();
		expect(req.body.isAlive).toBeUndefined();
		expect(req.body.age).toBeUndefined();
		// Make sure next was called but without an error
		expect(next).toHaveBeenCalled();
		expect(next.mock.calls[0][0]).toBeUndefined();
	});

	test('should allow a valid identifier to be passed without stripping characters', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let params = { identifier: 'http://www.example.com|2334567' };
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		expect(req.params.identifier).toEqual('http://www.example.com|2334567');
	});

	test('should not validate non-configured types', () => {
		let middleware = sanitizeMiddleware(INVALID_TYPE_ARGS);
		let params = { age: 32 };
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);
		expect(next).toHaveBeenCalled();

		let nextArg = next.mock.calls[0][0];
		expect(nextArg.issue).toHaveLength(1);

		let issue = nextArg.issue[0];
		expect(issue.diagnostics).toEqual('Invalid parameter: age');
	});

	test('should strip out characters that might cause xss', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let params = {
			identifier: '<script>alert(2+2);</script>',
			first_name: '<script>hello</script>world!'
		};
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		expect(req.params.identifier).toEqual('');
		expect(req.params.first_name).toEqual('world!');
	});

	test('should pass an error to next if a required argument is missing', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let req = { body: { name: 'joe' }, params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);
		expect(next).toHaveBeenCalled();

		let nextArg = next.mock.calls[0][0];
		expect(nextArg.issue).toHaveLength(1);

		let issue = nextArg.issue[0];
		expect(issue.diagnostics).toEqual('id is required');
	});

	test('should pass an error to next if an argument is not the correct type', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let query = { age: 'Johnson' };
		let req = { query, params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);
		expect(next).toHaveBeenCalled();

		let nextArg = next.mock.calls[0][0];
		expect(nextArg.issue).toHaveLength(1);

		let issue = nextArg.issue[0];
		expect(issue.diagnostics).toEqual('Invalid parameter: age');
	});

	test('should pass an error to next if something other than a string is passed in', () => {
		let middleware = sanitizeMiddleware(ARGS);
		// age should be a number, but express should make everything a string,
		// if it is a number going in, someone might have got something past express
		// and we should never allow the query to happen, it should trigger an error
		let query = { age: 24 };
		let req = { query, params: ARGS_PARAM };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);
		expect(next).toHaveBeenCalled();

		let nextArg = next.mock.calls[0][0];
		expect(nextArg.issue).toHaveLength(1);

		let issue = nextArg.issue[0];
		expect(issue.diagnostics).toEqual('age is invalid');
	});

});
