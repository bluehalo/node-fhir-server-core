const NutritionOrder_Nutrient = require('../NutritionOrder_Nutrient');

describe('NutritionOrder_Nutrient Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_Nutrient();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(NutritionOrder_Nutrient.__resourceType).toBe('NutritionOrder_Nutrient');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_Nutrient();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
