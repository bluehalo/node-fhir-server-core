const ExpansionProfile_Designation2 = require('../ExpansionProfile_Designation2');

describe('ExpansionProfile_Designation2 Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_Designation2();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExpansionProfile_Designation2.__resourceType).toBe('ExpansionProfile_Designation2');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_Designation2();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
