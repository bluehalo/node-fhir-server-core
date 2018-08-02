const ImplementationGuide_Dependency = require('../ImplementationGuide_Dependency');

describe('ImplementationGuide_Dependency Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImplementationGuide_Dependency();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ImplementationGuide_Dependency.__resourceType).toBe('ImplementationGuide_Dependency');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImplementationGuide_Dependency();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
