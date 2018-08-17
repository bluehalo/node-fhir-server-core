const ProcessResponse_ProcessNote = require('../ProcessResponse_ProcessNote');

describe('ProcessResponse_ProcessNote Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ProcessResponse_ProcessNote();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ProcessResponse_ProcessNote.__resourceType).toBe('ProcessResponse_ProcessNote');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ProcessResponse_ProcessNote();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
