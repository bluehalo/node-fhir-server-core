const TestScript_Origin = require('../TestScript_Origin');

describe('TestScript_Origin Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new TestScript_Origin();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(TestScript_Origin.__resourceType).toBe('TestScript_Origin');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new TestScript_Origin();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
