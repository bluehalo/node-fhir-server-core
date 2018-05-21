/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATEWRITTEN: {
		name: 'datewritten',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#visionprescription',
		documentation: 'Return prescriptions written on this date',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#visionprescription',
		documentation: 'Return prescriptions with this encounter identifier',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#visionprescription',
		documentation: 'Return prescriptions with this external identifier',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#visionprescription',
		documentation: 'The identity of a patient to list dispenses for',
	},
	PRESCRIBER: {
		name: 'prescriber',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#visionprescription',
		documentation: 'Who authorizes the vision product',
	},
};
