const RiskAssessment_Prediction = require('../RiskAssessment_Prediction');

describe('RiskAssessment_Prediction Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new RiskAssessment_Prediction();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(RiskAssessment_Prediction.__resourceType).toBe('RiskAssessment_Prediction');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new RiskAssessment_Prediction();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
