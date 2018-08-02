const NutritionOrder_Supplement = require('../NutritionOrder_Supplement');

describe('NutritionOrder_Supplement Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_Supplement();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(NutritionOrder_Supplement.__resourceType).toBe('NutritionOrder_Supplement');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_Supplement();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
