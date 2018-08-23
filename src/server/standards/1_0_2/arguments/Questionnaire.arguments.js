module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to the questionnaire or one of its groups.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'When the questionnaire was last changed.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'An identifier for the questionnaire.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'The author of the questionnaire.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The status of the questionnaire.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'All or part of the name of the questionnaire (title for the root group of the questionnaire).',
	},
	VERSION: {
		name: 'Version',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire.',
	},
};
