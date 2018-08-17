const DataRequirement_CodeFilter = require('../DataRequirement_CodeFilter');

describe('DataRequirement_CodeFilter Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DataRequirement_CodeFilter();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DataRequirement_CodeFilter.__resourceType).toBe('DataRequirement_CodeFilter');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DataRequirement_CodeFilter();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
