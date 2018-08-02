const Sequence_ReferenceSeq = require('../Sequence_ReferenceSeq');

describe('Sequence_ReferenceSeq Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Sequence_ReferenceSeq();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(Sequence_ReferenceSeq.__resourceType).toBe('Sequence_ReferenceSeq');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Sequence_ReferenceSeq();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
