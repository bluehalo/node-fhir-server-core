const MedicationRequest_Substitution = require('../MedicationRequest_Substitution');

describe('MedicationRequest_Substitution Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MedicationRequest_Substitution();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(MedicationRequest_Substitution.__resourceType).toBe('MedicationRequest_Substitution');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new MedicationRequest_Substitution();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
