module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-code',
		documentation: 'Return administrations of this medication code.',
	},
	EFFECTIVEDATE: {
		name: 'effectivedate',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-effectivedate',
		documentation: 'Date when patient was taking (or not taking) the medication.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-identifier',
		documentation: 'Return statements with this external identifier.',
	},
	MEDICATION: {
		name: 'medication',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-medication',
		documentation: 'Return administrations of this medication reference.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-patient',
		documentation: 'The identity of a patient to list statements  for.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-source',
		documentation: 'Who the information in the statement came from.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicationStatement-status',
		documentation: 'Return statements that match the given status.',
	},
};
