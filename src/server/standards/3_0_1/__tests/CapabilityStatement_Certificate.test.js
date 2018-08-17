const CapabilityStatement_Certificate = require('../CapabilityStatement_Certificate');

describe('CapabilityStatement_Certificate Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Certificate();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CapabilityStatement_Certificate.__resourceType).toBe('CapabilityStatement_Certificate');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Certificate();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
