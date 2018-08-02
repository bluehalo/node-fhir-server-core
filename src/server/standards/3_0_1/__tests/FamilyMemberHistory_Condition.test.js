const FamilyMemberHistory_Condition = require('../FamilyMemberHistory_Condition');

describe('FamilyMemberHistory_Condition Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new FamilyMemberHistory_Condition();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(FamilyMemberHistory_Condition.__resourceType).toBe('FamilyMemberHistory_Condition');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new FamilyMemberHistory_Condition();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
