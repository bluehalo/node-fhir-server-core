const GraphDefinition_Compartment = require('../GraphDefinition_Compartment');

describe('GraphDefinition_Compartment Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new GraphDefinition_Compartment();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(GraphDefinition_Compartment.__resourceType).toBe('GraphDefinition_Compartment');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new GraphDefinition_Compartment();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
