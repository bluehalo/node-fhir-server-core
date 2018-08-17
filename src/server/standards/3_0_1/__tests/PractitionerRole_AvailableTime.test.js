const PractitionerRole_AvailableTime = require('../PractitionerRole_AvailableTime');

describe('PractitionerRole_AvailableTime Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PractitionerRole_AvailableTime();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(PractitionerRole_AvailableTime.__resourceType).toBe('PractitionerRole_AvailableTime');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new PractitionerRole_AvailableTime();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
