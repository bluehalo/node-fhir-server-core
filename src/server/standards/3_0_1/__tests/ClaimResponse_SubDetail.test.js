const ClaimResponse_SubDetail = require('../ClaimResponse_SubDetail');

describe('ClaimResponse_SubDetail Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_SubDetail();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ClaimResponse_SubDetail.__resourceType).toBe('ClaimResponse_SubDetail');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClaimResponse_SubDetail();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
