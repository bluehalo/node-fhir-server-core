const ImmunizationRecommendation_Recommendation = require('../ImmunizationRecommendation_Recommendation');

describe('ImmunizationRecommendation_Recommendation Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_Recommendation();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ImmunizationRecommendation_Recommendation.__resourceType).toBe('ImmunizationRecommendation_Recommendation');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_Recommendation();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
