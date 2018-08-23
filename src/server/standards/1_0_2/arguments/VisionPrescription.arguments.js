module.exports = {
	DATEWRITTEN: {
		name: 'Datewritten',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-datewritten',
		description: 'Return prescriptions written on this date.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-encounter',
		description: 'Return prescriptions with this encounter identifier.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-identifier',
		description: 'Return prescriptions with this external identifier.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-patient',
		description: 'The identity of a patient to list dispenses for.',
	},
	PRESCRIBER: {
		name: 'Prescriber',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/VisionPrescription-prescriber',
		description: 'Who authorizes the vision product.',
	},
};
