const Immunization_VaccinationProtocol = require('../Immunization_VaccinationProtocol');

describe('Immunization_VaccinationProtocol Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Immunization_VaccinationProtocol();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(Immunization_VaccinationProtocol.__resourceType).toBe('Immunization_VaccinationProtocol');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new Immunization_VaccinationProtocol();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});
