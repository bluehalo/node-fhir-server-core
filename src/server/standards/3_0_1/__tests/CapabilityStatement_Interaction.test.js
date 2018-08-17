const CapabilityStatement_Interaction = require('../CapabilityStatement_Interaction');

describe('CapabilityStatement_Interaction Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Interaction();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CapabilityStatement_Interaction.__resourceType).toBe('CapabilityStatement_Interaction');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Interaction();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
