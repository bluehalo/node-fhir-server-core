const ConceptMap_DependsOn = require('../ConceptMap_DependsOn');

describe('ConceptMap_DependsOn Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ConceptMap_DependsOn();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ConceptMap_DependsOn.__resourceType).toBe('ConceptMap_DependsOn');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ConceptMap_DependsOn();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
