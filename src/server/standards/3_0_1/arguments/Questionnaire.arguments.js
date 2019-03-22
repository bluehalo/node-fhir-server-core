/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.item.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to one of its items in the questionnaire',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Questionnaire.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'The questionnaire publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.description',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-description',
		description: 'The description of the questionnaire',
	},
	effective: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Questionnaire.effectivePeriod',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-effective',
		description: 'The time during which the questionnaire is intended to be in use',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'External identifier for the questionnaire',
	},
	jurisdiction: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.jurisdiction',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-jurisdiction',
		description: 'Intended jurisdiction for the questionnaire',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-name',
		description: 'Computationally friendly name of the questionnaire',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'Name of the publisher of the questionnaire',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The current status of the questionnaire',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.title',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'The human-friendly name of the questionnaire',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Questionnaire.url',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-url',
		description: 'The uri that identifies the questionnaire',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.version',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire',
	},
};
