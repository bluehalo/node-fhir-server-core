module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-code',
		description: 'Return administrations of this medication code.',
	},
	DATEWRITTEN: {
		name: 'Datewritten',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-datewritten',
		description: 'Return prescriptions written on this date.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-encounter',
		description: 'Return prescriptions with this encounter identifier.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-identifier',
		description: 'Return prescriptions with this external identifier.',
	},
	MEDICATION: {
		name: 'Medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-medication',
		description: 'Return administrations of this medication reference.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-patient',
		description: 'The identity of a patient to list orders  for.',
	},
	PRESCRIBER: {
		name: 'Prescriber',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-prescriber',
		description: 'Who ordered the medication(s).',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-status',
		description: 'Status of the prescription.',
	},
};
