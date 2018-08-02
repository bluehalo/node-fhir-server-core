const SupplyRequest_OrderedItem = require('../SupplyRequest_OrderedItem');

describe('SupplyRequest_OrderedItem Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new SupplyRequest_OrderedItem();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(SupplyRequest_OrderedItem.__resourceType).toBe('SupplyRequest_OrderedItem');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new SupplyRequest_OrderedItem();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
