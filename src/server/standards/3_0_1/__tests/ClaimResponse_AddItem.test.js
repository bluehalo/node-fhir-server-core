const ClaimResponse_AddItem = require('../ClaimResponse_AddItem');

describe('ClaimResponse_AddItem Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_AddItem();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ClaimResponse_AddItem.__resourceType).toBe('ClaimResponse_AddItem');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_AddItem();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
