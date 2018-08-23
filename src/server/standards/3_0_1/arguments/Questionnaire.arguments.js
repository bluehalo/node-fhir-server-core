module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to one of its items in the questionnaire.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'The questionnaire publication date.',
	},
	DESCRIPTION: {
		name: 'Description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-description',
		description: 'The description of the questionnaire.',
	},
	EFFECTIVE: {
		name: 'Effective',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-effective',
		description: 'The time during which the questionnaire is intended to be in use.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'External identifier for the questionnaire.',
	},
	JURISDICTION: {
		name: 'Jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction',
		description: 'Intended jurisdiction for the questionnaire.',
	},
	NAME: {
		name: 'Name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-name',
		description: 'Computationally friendly name of the questionnaire.',
	},
	PUBLISHER: {
		name: 'Publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'Name of the publisher of the questionnaire.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The current status of the questionnaire.',
	},
	TITLE: {
		name: 'Title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'The human-friendly name of the questionnaire.',
	},
	URL: {
		name: 'Url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-url',
		description: 'The uri that identifies the questionnaire.',
	},
	VERSION: {
		name: 'Version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire.',
	},
};
