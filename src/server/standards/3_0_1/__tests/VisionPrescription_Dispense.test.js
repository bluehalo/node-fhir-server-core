const VisionPrescription_Dispense = require('../VisionPrescription_Dispense');

describe('VisionPrescription_Dispense Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new VisionPrescription_Dispense();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(VisionPrescription_Dispense.__resourceType).toBe('VisionPrescription_Dispense');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new VisionPrescription_Dispense();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
