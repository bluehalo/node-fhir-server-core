const Questionnaire_EnableWhen = require('../Questionnaire_EnableWhen');

describe('Questionnaire_EnableWhen Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Questionnaire_EnableWhen();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(Questionnaire_EnableWhen.__resourceType).toBe('Questionnaire_EnableWhen');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Questionnaire_EnableWhen();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
