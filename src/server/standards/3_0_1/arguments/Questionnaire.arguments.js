module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to one of its items in the questionnaire.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'The questionnaire publication date.',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-description',
		description: 'The description of the questionnaire.',
	},
	EFFECTIVE: {
		name: 'effective',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-effective',
		description: 'The time during which the questionnaire is intended to be in use.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'External identifier for the questionnaire.',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction',
		description: 'Intended jurisdiction for the questionnaire.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-name',
		description: 'Computationally friendly name of the questionnaire.',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'Name of the publisher of the questionnaire.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The current status of the questionnaire.',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'The human-friendly name of the questionnaire.',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-url',
		description: 'The uri that identifies the questionnaire.',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire.',
	},
};
