const EpisodeOfCare_StatusHistory = require('../EpisodeOfCare_StatusHistory');

describe('EpisodeOfCare_StatusHistory Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EpisodeOfCare_StatusHistory();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(EpisodeOfCare_StatusHistory.__resourceType).toBe('EpisodeOfCare_StatusHistory');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new EpisodeOfCare_StatusHistory();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
