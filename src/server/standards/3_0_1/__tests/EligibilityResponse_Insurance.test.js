const EligibilityResponse_Insurance = require('../EligibilityResponse_Insurance');

describe('EligibilityResponse_Insurance Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_Insurance();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(EligibilityResponse_Insurance.__resourceType).toBe('EligibilityResponse_Insurance');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EligibilityResponse_Insurance();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
