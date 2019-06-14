const ServerError = require('./server.error.js');

describe('ServerError', () => {
	test('should be instance of Error and ServerError', () => {
		let error = new ServerError('Foobar');

		expect(error).toBeInstanceOf(Error);
		expect(error).toBeInstanceOf(ServerError);
	});

	test('should mixin any additional custom properties', () => {
		let error = new ServerError('Foobar', {
			statusCode: 409,
			issue: [
				{
					foo: 'bar',
				},
			],
		});

		expect(error.message).toBe('Foobar');
		expect(error.statusCode).toBe(409);
		expect(error.issue).toHaveLength(1);
		expect(error.issue[0].foo).toBe('bar');
	});

	test('should be able to be passed directly to other classes', () => {
		let error = new ServerError('Foobar', {
			statusCode: 409,
			issue: [
				{
					foo: 'bar',
				},
			],
		});

		// This mimics the concept of a resource we generate
		class Operation {
			constructor(options) {
				Object.assign(this, options);
			}

			toJSON() {
				return {
					statusCode: this.statusCode,
					message: this.message,
				};
			}
		}

		let operation = new Operation(error);
		let json = operation.toJSON();

		expect(json.statusCode).toBe(409);
		expect(json.message).toBe('Foobar');
		expect(json.issue).toBeUndefined();
	});
});
