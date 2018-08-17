const HealthcareService_AvailableTime = require('../HealthcareService_AvailableTime');

describe('HealthcareService_AvailableTime Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new HealthcareService_AvailableTime();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(HealthcareService_AvailableTime.__resourceType).toBe('HealthcareService_AvailableTime');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new HealthcareService_AvailableTime();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
