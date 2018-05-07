const DataRequirement_DateFilter = require('../DataRequirement_DateFilter');

describe('DataRequirement_DateFilter Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DataRequirement_DateFilter();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DataRequirement_DateFilter.__resourceType).toBe('DataRequirement_DateFilter');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DataRequirement_DateFilter();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
