const CapabilityStatement_Messaging = require('../CapabilityStatement_Messaging');

describe('CapabilityStatement_Messaging Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Messaging();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CapabilityStatement_Messaging.__resourceType).toBe('CapabilityStatement_Messaging');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CapabilityStatement_Messaging();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
