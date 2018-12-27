module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-author',
		documentation: 'The provider or device that identified the issue.',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-category',
		documentation: 'Issue Category, e.g. drug-drug, duplicate therapy, etc.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-date',
		documentation: 'When identified.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-identifier',
		documentation: 'Unique id for the detected issue.',
	},
	IMPLICATED: {
		name: 'implicated',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-implicated',
		documentation: 'Problem resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/DetectedIssue-patient',
		documentation: 'Associated patient.',
	},
};
