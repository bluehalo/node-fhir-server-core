const ImplementationGuide_Resource = require('../ImplementationGuide_Resource');

describe('ImplementationGuide_Resource Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImplementationGuide_Resource();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ImplementationGuide_Resource.__resourceType).toBe('ImplementationGuide_Resource');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImplementationGuide_Resource();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
