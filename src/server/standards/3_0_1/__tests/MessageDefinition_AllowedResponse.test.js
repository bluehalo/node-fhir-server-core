const MessageDefinition_AllowedResponse = require('../MessageDefinition_AllowedResponse');

describe('MessageDefinition_AllowedResponse Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MessageDefinition_AllowedResponse();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(MessageDefinition_AllowedResponse.__resourceType).toBe('MessageDefinition_AllowedResponse');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MessageDefinition_AllowedResponse();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
