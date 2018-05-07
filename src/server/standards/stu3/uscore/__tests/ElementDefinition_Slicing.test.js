const ElementDefinition_Slicing = require('../ElementDefinition_Slicing');

describe('ElementDefinition_Slicing Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Slicing();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ElementDefinition_Slicing.__resourceType).toBe('ElementDefinition_Slicing');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Slicing();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
