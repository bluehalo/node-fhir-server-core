/**
 * @name exports
 * @static
 * @summary Arguments for the questionnaireresponse query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.author',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author',
		description: 'The author of the questionnaire',
	},
	authored: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'QuestionnaireResponse.authored',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored',
		description: 'When the questionnaire was authored',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter',
		description: 'Encounter during which questionnaire was authored',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient',
		description: 'The patient that is the subject of the questionnaire',
	},
	questionnaire: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.questionnaire',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire',
		description: 'The questionnaire the answers are provided for',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.source',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source',
		description: 'The person who answered the questions',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'QuestionnaireResponse.status',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status',
		description: 'The status of the questionnaire response',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject',
		description: 'The subject of the questionnaire',
	},
};
