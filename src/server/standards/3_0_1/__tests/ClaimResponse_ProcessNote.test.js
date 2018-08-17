const ClaimResponse_ProcessNote = require('../ClaimResponse_ProcessNote');

describe('ClaimResponse_ProcessNote Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_ProcessNote();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ClaimResponse_ProcessNote.__resourceType).toBe('ClaimResponse_ProcessNote');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_ProcessNote();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
