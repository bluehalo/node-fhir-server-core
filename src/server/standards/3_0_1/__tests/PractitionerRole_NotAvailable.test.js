const PractitionerRole_NotAvailable = require('../PractitionerRole_NotAvailable');

describe('PractitionerRole_NotAvailable Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PractitionerRole_NotAvailable();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(PractitionerRole_NotAvailable.__resourceType).toBe('PractitionerRole_NotAvailable');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PractitionerRole_NotAvailable();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
