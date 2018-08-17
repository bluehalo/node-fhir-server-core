const ExplanationOfBenefit_Detail = require('../ExplanationOfBenefit_Detail');

describe('ExplanationOfBenefit_Detail Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Detail();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExplanationOfBenefit_Detail.__resourceType).toBe('ExplanationOfBenefit_Detail');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Detail();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
