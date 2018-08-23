module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to the questionnaire or one of its groups.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'When the questionnaire was last changed.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'An identifier for the questionnaire.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'The author of the questionnaire.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The status of the questionnaire.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'All or part of the name of the questionnaire (title for the root group of the questionnaire).',
	},
	VERSION: {
		name: 'version',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire.',
	},
};
