module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-code',
		documentation: 'Return administrations of this medication code.',
	},
	DATEWRITTEN: {
		name: 'datewritten',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-datewritten',
		documentation: 'Return prescriptions written on this date.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-encounter',
		documentation: 'Return prescriptions with this encounter identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-identifier',
		documentation: 'Return prescriptions with this external identifier.',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-medication',
		documentation: 'Return administrations of this medication reference.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-patient',
		documentation: 'The identity of a patient to list orders  for.',
	},
	PRESCRIBER: {
		name: 'prescriber',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-prescriber',
		documentation: 'Who ordered the medication(s).',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationOrder-status',
		documentation: 'Status of the prescription.',
	},
};
