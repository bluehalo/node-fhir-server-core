const HealthcareService_NotAvailable = require('../HealthcareService_NotAvailable');

describe('HealthcareService_NotAvailable Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new HealthcareService_NotAvailable();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(HealthcareService_NotAvailable.__resourceType).toBe('HealthcareService_NotAvailable');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new HealthcareService_NotAvailable();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
