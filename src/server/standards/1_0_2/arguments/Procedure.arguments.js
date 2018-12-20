module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-code',
		documentation: 'A code to identify a  procedure.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-date',
		documentation: 'Date/Period the procedure was performed.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-encounter',
		documentation: 'The encounter associated with the procedure.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-identifier',
		documentation: 'A unique identifier for a procedure.',
	},
	LOCATION: {
		name: 'location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-location',
		documentation: 'Where the procedure happened.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-patient',
		documentation: 'Search by subject - a patient.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-performer',
		documentation: 'The reference to the practitioner.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-subject',
		documentation: 'Search by subject.',
	},
};
