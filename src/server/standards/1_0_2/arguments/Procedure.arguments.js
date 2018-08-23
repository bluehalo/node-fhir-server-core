module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-code',
		description: 'A code to identify a  procedure.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-date',
		description: 'Date/Period the procedure was performed.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-encounter',
		description: 'The encounter associated with the procedure.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-identifier',
		description: 'A unique identifier for a procedure.',
	},
	LOCATION: {
		name: 'Location',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-location',
		description: 'Where the procedure happened.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-patient',
		description: 'Search by subject - a patient.',
	},
	PERFORMER: {
		name: 'Performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-performer',
		description: 'The reference to the practitioner.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Procedure-subject',
		description: 'Search by subject.',
	},
};
