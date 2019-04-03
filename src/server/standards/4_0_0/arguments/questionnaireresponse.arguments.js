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
		description: 'The author of the questionnaire response',
	},
	authored: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'QuestionnaireResponse.authored',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored',
		description: 'When the questionnaire response was last changed',
	},
	'based-on': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.basedOn',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-based-on',
		description: 'Plan/proposal/order fulfilled by this questionnaire response',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter',
		description: 'Encounter associated with the questionnaire response',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'QuestionnaireResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-identifier',
		description: 'The unique identifier for the questionnaire response',
	},
	'part-of': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.partOf',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-part-of',
		description: 'Procedure or observation this questionnaire response was performed as a part of',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'QuestionnaireResponse.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient',
		description: 'The patient that is the subject of the questionnaire response',
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
		description: 'The individual providing the information reflected in the questionnaire respose',
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
		description: 'The subject of the questionnaire response',
	},
};
