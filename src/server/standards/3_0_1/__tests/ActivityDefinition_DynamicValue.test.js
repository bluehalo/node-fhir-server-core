const ActivityDefinition_DynamicValue = require('../ActivityDefinition_DynamicValue');

describe('ActivityDefinition_DynamicValue Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ActivityDefinition_DynamicValue();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ActivityDefinition_DynamicValue.__resourceType).toBe('ActivityDefinition_DynamicValue');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ActivityDefinition_DynamicValue();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
