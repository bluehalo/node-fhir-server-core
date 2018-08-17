const Range = require('../Range');

describe('Range Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Range();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(Range.__resourceType).toBe('Range');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Range();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
