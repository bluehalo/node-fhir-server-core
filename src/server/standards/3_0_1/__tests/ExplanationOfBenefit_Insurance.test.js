const ExplanationOfBenefit_Insurance = require('../ExplanationOfBenefit_Insurance');

describe('ExplanationOfBenefit_Insurance Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Insurance();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExplanationOfBenefit_Insurance.__resourceType).toBe('ExplanationOfBenefit_Insurance');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_Insurance();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
