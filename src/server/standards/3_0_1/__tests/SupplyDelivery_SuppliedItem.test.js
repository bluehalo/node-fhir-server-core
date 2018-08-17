const SupplyDelivery_SuppliedItem = require('../SupplyDelivery_SuppliedItem');

describe('SupplyDelivery_SuppliedItem Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new SupplyDelivery_SuppliedItem();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(SupplyDelivery_SuppliedItem.__resourceType).toBe('SupplyDelivery_SuppliedItem');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new SupplyDelivery_SuppliedItem();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
