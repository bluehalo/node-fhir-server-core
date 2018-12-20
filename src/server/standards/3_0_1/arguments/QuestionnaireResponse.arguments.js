module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author',
		documentation: 'The author of the questionnaire response.',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored',
		documentation: 'When the questionnaire response was last changed.',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-based-on',
		documentation: 'Plan/proposal/order fulfilled by this questionnaire response.',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-context',
		documentation: 'Encounter or episode associated with the questionnaire response.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-identifier',
		documentation: 'The unique identifier for the questionnaire response.',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-parent',
		documentation: 'Procedure or observation this questionnaire response was performed as a part of.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient',
		documentation: 'The patient that is the subject of the questionnaire response.',
	},
	QUESTIONNAIRE: {
		name: 'questionnaire',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire',
		documentation: 'The questionnaire the answers are provided for.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source',
		documentation: 'The individual providing the information reflected in the questionnaire respose.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status',
		documentation: 'The status of the questionnaire response.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject',
		documentation: 'The subject of the questionnaire response.',
	},
};
