const DiagnosticReport_Performer = require('../DiagnosticReport_Performer');

describe('DiagnosticReport_Performer Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DiagnosticReport_Performer();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DiagnosticReport_Performer.__resourceType).toBe('DiagnosticReport_Performer');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DiagnosticReport_Performer();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
