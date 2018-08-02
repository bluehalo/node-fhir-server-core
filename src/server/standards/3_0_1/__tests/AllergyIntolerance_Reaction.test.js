const AllergyIntolerance_Reaction = require('../AllergyIntolerance_Reaction');

describe('AllergyIntolerance_Reaction Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new AllergyIntolerance_Reaction();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(AllergyIntolerance_Reaction.__resourceType).toBe('AllergyIntolerance_Reaction');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new AllergyIntolerance_Reaction();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
