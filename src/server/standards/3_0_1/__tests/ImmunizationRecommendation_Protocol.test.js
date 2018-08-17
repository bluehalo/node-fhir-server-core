const ImmunizationRecommendation_Protocol = require('../ImmunizationRecommendation_Protocol');

describe('ImmunizationRecommendation_Protocol Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_Protocol();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ImmunizationRecommendation_Protocol.__resourceType).toBe('ImmunizationRecommendation_Protocol');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_Protocol();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
