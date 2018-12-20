const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const { VERSIONS } = require(path.resolve('./src/constants'));

const ARGS_PARAM = {
	version: VERSIONS['3_0_1'],
};

const URL = 'localhost:3000/3_0_1/Patient/_search';

const ARGS = [
	{
		name: 'first_name',
		type: 'string',
	},
	{
		name: 'birthdate',
		type: 'date',
	},
	{
		name: 'isAlive',
		type: 'boolean',
	},
	{
		name: 'age',
		type: 'number',
	},
	{
		name: 'identifier',
		type: 'token',
	},
];

const SEARCH_ARGS = [
	{
		name: '_sort',
		type: 'string',
	},
	{
		name: '_count',
		type: 'number',
	},
	{
		name: '_include',
		type: 'string',
	},
	{
		name: '_revinclude',
		type: 'string',
	},
	{
		name: '_summary',
		type: 'token',
	},
	{
		name: '_elements',
		type: 'string',
	},
];

const REQUIRED_ARGS = [
	{
		name: 'id',
		type: 'string',
		required: true,
	},
];

const INVALID_TYPE_ARGS = [
	{
		name: 'age',
		type: 'integer',
	},
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
		let { first_name, age, birthdate, isAlive } = req.sanitized_args;
		expect(typeof first_name).toEqual('string');
		expect(typeof isAlive).toEqual('boolean');
		expect(typeof age).toEqual('number');
		expect(typeof birthdate).toEqual('string');
		// birthdate no longer moment object
		// expect(birthdate).toBeInstanceOf(moment);
		// Make sure next was called but without an error
		expect(next).toHaveBeenCalled();
		// This should be the argument next would be invoked with
		// calls[0] is the first set of arguments, calls[0][0] is the first argument
		expect(next.mock.calls[0][0]).toBeUndefined();
	});

	test('should accept a different format for date types', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let query = { birthdate: '2017-03-01T13:10:00' };
		let req = { query, params: ARGS_PARAM, method: 'GET' };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		expect(req.sanitized_args.birthdate).toEqual(query.birthdate);
		expect(typeof req.sanitized_args.birthdate).toEqual('string');
	});

	test('should filter out extra arguments that do not belong', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let body = { id: 'john-doe', age: '24', birthdate: '740088404220', isAlive: 'true' };
		let req = { body, params: ARGS_PARAM, url: URL, method: 'POST' };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		// only id should be passed through
		expect(typeof req.sanitized_args.id).toEqual('string');
		expect(req.sanitized_args.id).toEqual('john-doe');
		expect(req.sanitized_args.birthdate).toBeUndefined();
		expect(req.sanitized_args.isAlive).toBeUndefined();
		expect(req.sanitized_args.age).toBeUndefined();
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
			first_name: '<script>hello</script>world!',
		};
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		expect(req.sanitized_args.identifier).toEqual('');
		expect(req.sanitized_args.first_name).toEqual('world!');
	});

	test('should pass an error to next if a required argument is missing', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let req = { body: { name: 'joe' }, params: ARGS_PARAM, url: URL };
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
		let req = { query, params: ARGS_PARAM, method: 'GET' };
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
		let req = { query, params: ARGS_PARAM, method: 'GET' };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);
		expect(next).toHaveBeenCalled();

		let nextArg = next.mock.calls[0][0];
		expect(nextArg.issue).toHaveLength(1);

		let issue = nextArg.issue[0];
		expect(issue.diagnostics).toEqual('age is invalid');
	});

	test('should allow all common search args', () => {
		let middleware = sanitizeMiddleware(SEARCH_ARGS);
		let params = {
			_sort: 'status',
			_count: '1',
			_include: 'Observation',
			_revinclude: 'Patient',
			_summary: 'text',
			_elements: 'identifier',
		};
		let req = { params: Object.assign(params, ARGS_PARAM) };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		// console log error so easier to find
		if (next && next.mock.calls[0][0]) {
			let nextArg = next.mock.calls[0][0];
			console.log(nextArg.issue[0]);
		}

		// Inspect params and make sure they are the correct type
		let { _sort, _count, _include, _revinclude, _summary, _elements } = req.sanitized_args;

		expect(typeof _sort).toEqual('string');
		expect(typeof _count).toEqual('number');
		expect(typeof _include).toEqual('string');
		expect(typeof _revinclude).toEqual('string');
		expect(typeof _summary).toEqual('string');
		expect(typeof _elements).toEqual('string');

		// Make sure next was called but without an error
		expect(next).toHaveBeenCalled();
		// This should be the argument next would be invoked with
		// calls[0] is the first set of arguments, calls[0][0] is the first argument
		expect(next.mock.calls[0][0]).toBeUndefined();
	});
});
