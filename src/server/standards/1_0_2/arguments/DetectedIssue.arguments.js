module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-author',
		description: 'The provider or device that identified the issue.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-category',
		description: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-date',
		description: 'When identified.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-identifier',
		description: 'Unique id for the detected issue.',
	},
	IMPLICATED: {
		name: 'implicated',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated',
		description: 'Problem resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-patient',
		description: 'Associated patient.',
	},
};
