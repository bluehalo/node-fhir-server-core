const CapabilityStatement_SupportedMessage = require('../CapabilityStatement_SupportedMessage');

describe('CapabilityStatement_SupportedMessage Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_SupportedMessage();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CapabilityStatement_SupportedMessage.__resourceType).toBe('CapabilityStatement_SupportedMessage');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_SupportedMessage();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
