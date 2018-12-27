module.exports = {
	DATEWRITTEN: {
		name: 'datewritten',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten',
		documentation: 'Return prescriptions written on this date.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-encounter',
		documentation: 'Return prescriptions with this encounter identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-identifier',
		documentation: 'Return prescriptions with this external identifier.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-patient',
		documentation: 'The identity of a patient to list dispenses for.',
	},
	PRESCRIBER: {
		name: 'prescriber',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber',
		documentation: 'Who authorizes the vision product.',
	},
};
