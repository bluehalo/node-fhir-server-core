const ImmunizationRecommendation_DateCriterion = require('../ImmunizationRecommendation_DateCriterion');

describe('ImmunizationRecommendation_DateCriterion Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_DateCriterion();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ImmunizationRecommendation_DateCriterion.__resourceType).toBe('ImmunizationRecommendation_DateCriterion');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ImmunizationRecommendation_DateCriterion();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
