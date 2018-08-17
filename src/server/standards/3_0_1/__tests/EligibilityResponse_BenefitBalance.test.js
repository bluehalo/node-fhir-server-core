const EligibilityResponse_BenefitBalance = require('../EligibilityResponse_BenefitBalance');

describe('EligibilityResponse_BenefitBalance Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_BenefitBalance();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(EligibilityResponse_BenefitBalance.__resourceType).toBe('EligibilityResponse_BenefitBalance');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_BenefitBalance();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
