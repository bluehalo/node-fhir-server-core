const ContactPoint = require('../ContactPoint');

describe('ContactPoint Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ContactPoint();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ContactPoint.__resourceType).toBe('ContactPoint');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ContactPoint();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
