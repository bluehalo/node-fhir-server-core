const EpisodeOfCare_Diagnosis = require('../EpisodeOfCare_Diagnosis');

describe('EpisodeOfCare_Diagnosis Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EpisodeOfCare_Diagnosis();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(EpisodeOfCare_Diagnosis.__resourceType).toBe('EpisodeOfCare_Diagnosis');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EpisodeOfCare_Diagnosis();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
