const NamingSystem_UniqueId = require('../NamingSystem_UniqueId');

describe('NamingSystem_UniqueId Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NamingSystem_UniqueId();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(NamingSystem_UniqueId.__resourceType).toBe('NamingSystem_UniqueId');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new NamingSystem_UniqueId();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
