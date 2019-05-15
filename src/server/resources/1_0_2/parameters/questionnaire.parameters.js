/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaire query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.group.concept',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-code',
		description: 'A code that corresponds to the questionnaire or one of its groups',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Questionnaire.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-date',
		description: 'When the questionnaire was last changed',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-identifier',
		description: 'An identifier for the questionnaire',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-publisher',
		description: 'The author of the questionnaire',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Questionnaire.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-status',
		description: 'The status of the questionnaire',
	},
	title: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.group.title',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-title',
		description: 'All or part of the name of the questionnaire (title for the root group of the questionnaire)',
	},
	version: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Questionnaire.version',
		definition: 'http://hl7.org/fhir/SearchParameter/Questionnaire-version',
		description: 'The business version of the questionnaire',
	},
};
