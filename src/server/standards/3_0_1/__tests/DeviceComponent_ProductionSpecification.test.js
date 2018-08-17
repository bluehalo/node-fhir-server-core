const DeviceComponent_ProductionSpecification = require('../DeviceComponent_ProductionSpecification');

describe('DeviceComponent_ProductionSpecification Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DeviceComponent_ProductionSpecification();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DeviceComponent_ProductionSpecification.__resourceType).toBe('DeviceComponent_ProductionSpecification');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DeviceComponent_ProductionSpecification();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
