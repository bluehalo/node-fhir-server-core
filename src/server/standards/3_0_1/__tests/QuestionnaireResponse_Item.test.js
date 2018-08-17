const QuestionnaireResponse_Item = require('../QuestionnaireResponse_Item');

describe('QuestionnaireResponse_Item Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new QuestionnaireResponse_Item();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(QuestionnaireResponse_Item.__resourceType).toBe('QuestionnaireResponse_Item');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new QuestionnaireResponse_Item();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
