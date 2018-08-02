const ExpansionProfile_ExcludedSystem = require('../ExpansionProfile_ExcludedSystem');

describe('ExpansionProfile_ExcludedSystem Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_ExcludedSystem();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ExpansionProfile_ExcludedSystem.__resourceType).toBe('ExpansionProfile_ExcludedSystem');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ExpansionProfile_ExcludedSystem();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
