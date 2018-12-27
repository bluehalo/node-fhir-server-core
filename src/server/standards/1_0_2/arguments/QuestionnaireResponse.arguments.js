module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author',
		documentation: 'The author of the questionnaire.',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored',
		documentation: 'When the questionnaire was authored.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter',
		documentation: 'Encounter during which questionnaire was authored.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient',
		documentation: 'The patient that is the subject of the questionnaire.',
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
		documentation: 'The person who answered the questions.',
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
		documentation: 'The subject of the questionnaire.',
	},
};
