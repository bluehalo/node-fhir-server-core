const DeviceMetric_Calibration = require('../DeviceMetric_Calibration');

describe('DeviceMetric_Calibration Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DeviceMetric_Calibration();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DeviceMetric_Calibration.__resourceType).toBe('DeviceMetric_Calibration');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DeviceMetric_Calibration();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
