const DetectedIssue_Mitigation = require('../DetectedIssue_Mitigation');

describe('DetectedIssue_Mitigation Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DetectedIssue_Mitigation();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DetectedIssue_Mitigation.__resourceType).toBe('DetectedIssue_Mitigation');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DetectedIssue_Mitigation();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
