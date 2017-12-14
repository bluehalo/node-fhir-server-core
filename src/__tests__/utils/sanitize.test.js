const moment = require('moment');
const path = require('path');
const { sanitizeMiddleware } = require(path.resolve('./src/server/utils/sanitize.utils'));
const errors = require(path.resolve('./src/server/utils/error.utils'));

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
	}
];

const REQUIRED_ARGS = [
	{
		name: 'id',
		type: 'string',
		required: true
	}
];

describe('Sanitize Utils Tests', () => {

	test('should coerce the arguments into the correct type', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let params = { first_name: 'Joe', age: '24', birthdate: '740088404220', isAlive: 'true' };
		let req = { params };
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
		// console.log(next.mock.calls[0][0].message);
	});

	test('should filter out extra arguments that do not belong', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let body = { id: 'john-doe', age: '24', birthdate: '740088404220', isAlive: 'true' };
		let req = { body };
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

	test('should pass an error to next if a required argument is missing', () => {
		let middleware = sanitizeMiddleware(REQUIRED_ARGS);
		let req = { body: { name: 'joe' }};
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		let nextArg = next.mock.calls[0][0];

		expect(next).toHaveBeenCalled();
		expect(nextArg).toBeInstanceOf(errors.ServerError);
		expect(nextArg.message).toEqual('Invalid parameter');

	});

	test('should pass an error to next if an argument is not the correct type', () => {
		let middleware = sanitizeMiddleware(ARGS);
		let query = { age: 'Johnson' };
		let req = { query };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		let nextArg = next.mock.calls[0][0];

		expect(next).toHaveBeenCalled();
		expect(nextArg).toBeInstanceOf(errors.ServerError);
		expect(nextArg.message).toEqual('Invalid parameter');
	});

	test('should pass an error to next if something other than a string is passed in', () => {
		let middleware = sanitizeMiddleware(ARGS);
		// age should be a number, but express should make everything a string,
		// if it is a number going in, someone might have got something past express
		// and we should never allow the query to happen, it should trigger an error
		let query = { age: 24 };
		let req = { query };
		let next = jest.fn();

		// invoke our middleware
		middleware(req, null, next);

		let nextArg = next.mock.calls[0][0];

		expect(next).toHaveBeenCalled();
		expect(nextArg).toBeInstanceOf(errors.ServerError);
		expect(nextArg.message).toEqual('Invalid parameter');
	});

});
