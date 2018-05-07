const ElementDefinition_Constraint = require('../ElementDefinition_Constraint');

describe('ElementDefinition_Constraint Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Constraint();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ElementDefinition_Constraint.__resourceType).toBe('ElementDefinition_Constraint');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ElementDefinition_Constraint();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
