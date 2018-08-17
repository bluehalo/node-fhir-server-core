const CapabilityStatement_Implementation = require('../CapabilityStatement_Implementation');

describe('CapabilityStatement_Implementation Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Implementation();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CapabilityStatement_Implementation.__resourceType).toBe('CapabilityStatement_Implementation');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Implementation();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
