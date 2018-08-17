const QuestionnaireResponse_Answer = require('../QuestionnaireResponse_Answer');

describe('QuestionnaireResponse_Answer Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new QuestionnaireResponse_Answer();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(QuestionnaireResponse_Answer.__resourceType).toBe('QuestionnaireResponse_Answer');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new QuestionnaireResponse_Answer();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
