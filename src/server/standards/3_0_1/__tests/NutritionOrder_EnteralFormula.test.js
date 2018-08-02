const NutritionOrder_EnteralFormula = require('../NutritionOrder_EnteralFormula');

describe('NutritionOrder_EnteralFormula Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_EnteralFormula();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(NutritionOrder_EnteralFormula.__resourceType).toBe('NutritionOrder_EnteralFormula');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NutritionOrder_EnteralFormula();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
