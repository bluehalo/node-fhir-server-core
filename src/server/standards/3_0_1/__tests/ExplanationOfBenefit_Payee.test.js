const ExplanationOfBenefit_Payee = require('../ExplanationOfBenefit_Payee');

describe('ExplanationOfBenefit_Payee Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Payee();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExplanationOfBenefit_Payee.__resourceType).toBe('ExplanationOfBenefit_Payee');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Payee();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
