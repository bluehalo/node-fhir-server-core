const ClinicalImpression_Investigation = require('../ClinicalImpression_Investigation');

describe('ClinicalImpression_Investigation Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClinicalImpression_Investigation();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(ClinicalImpression_Investigation.__resourceType).toBe('ClinicalImpression_Investigation');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new ClinicalImpression_Investigation();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
