const CompartmentDefinition_Resource = require('../CompartmentDefinition_Resource');

describe('CompartmentDefinition_Resource Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CompartmentDefinition_Resource();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CompartmentDefinition_Resource.__resourceType).toBe('CompartmentDefinition_Resource');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CompartmentDefinition_Resource();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
