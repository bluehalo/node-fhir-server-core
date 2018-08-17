const ExplanationOfBenefit_SubDetail = require('../ExplanationOfBenefit_SubDetail');

describe('ExplanationOfBenefit_SubDetail Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_SubDetail();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExplanationOfBenefit_SubDetail.__resourceType).toBe('ExplanationOfBenefit_SubDetail');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExplanationOfBenefit_SubDetail();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
