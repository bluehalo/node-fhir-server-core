/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The author of the questionnaire response',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'When the questionnaire response was last changed',
	},
	BASED_ON: {
		name: 'based-on',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'Plan/proposal/order fulfilled by this questionnaire response',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'Encounter or episode associated with the questionnaire response',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The unique identifier for the questionnaire response',
	},
	PARENT: {
		name: 'parent',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'Procedure or observation this questionnaire response was performed as a part of',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The patient that is the subject of the questionnaire response',
	},
	QUESTIONNAIRE: {
		name: 'questionnaire',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The questionnaire the answers are provided for',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The individual providing the information reflected in the questionnaire respose',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The status of the questionnaire response',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#questionnaireresponse',
		documentation: 'The subject of the questionnaire response',
	},
};
