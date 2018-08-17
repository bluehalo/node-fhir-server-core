const MedicationRequest_DispenseRequest = require('../MedicationRequest_DispenseRequest');

describe('MedicationRequest_DispenseRequest Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MedicationRequest_DispenseRequest();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(MedicationRequest_DispenseRequest.__resourceType).toBe('MedicationRequest_DispenseRequest');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MedicationRequest_DispenseRequest();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
