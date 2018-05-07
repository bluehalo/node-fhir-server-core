const ElementDefinition_Mapping = require('../ElementDefinition_Mapping');

describe('ElementDefinition_Mapping Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Mapping();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ElementDefinition_Mapping.__resourceType).toBe('ElementDefinition_Mapping');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Mapping();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
