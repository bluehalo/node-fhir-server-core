module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-code',
		description: 'Return administrations of this medication code.',
	},
	EFFECTIVEDATE: {
		name: 'Effectivedate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-effectivedate',
		description: 'Date when patient was taking (or not taking) the medication.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-identifier',
		description: 'Return statements with this external identifier.',
	},
	MEDICATION: {
		name: 'Medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-medication',
		description: 'Return administrations of this medication reference.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-patient',
		description: 'The identity of a patient to list statements  for.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-source',
		description: 'Who the information in the statement came from.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-status',
		description: 'Return statements that match the given status.',
	},
};
