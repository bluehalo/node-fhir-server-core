const AdverseEvent_SuspectEntity = require('../AdverseEvent_SuspectEntity');

describe('AdverseEvent_SuspectEntity Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new AdverseEvent_SuspectEntity();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(AdverseEvent_SuspectEntity.__resourceType).toBe('AdverseEvent_SuspectEntity');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new AdverseEvent_SuspectEntity();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
