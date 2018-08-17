const CommunicationRequest_Requester = require('../CommunicationRequest_Requester');

describe('CommunicationRequest_Requester Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CommunicationRequest_Requester();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(CommunicationRequest_Requester.__resourceType).toBe('CommunicationRequest_Requester');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new CommunicationRequest_Requester();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
