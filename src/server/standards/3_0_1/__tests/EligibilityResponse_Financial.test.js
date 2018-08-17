const EligibilityResponse_Financial = require('../EligibilityResponse_Financial');

describe('EligibilityResponse_Financial Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_Financial();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(EligibilityResponse_Financial.__resourceType).toBe('EligibilityResponse_Financial');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_Financial();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
