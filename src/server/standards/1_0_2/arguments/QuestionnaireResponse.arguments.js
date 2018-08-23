module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author',
		description: 'The author of the questionnaire.',
	},
	AUTHORED: {
		name: 'authored',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored',
		description: 'When the questionnaire was authored.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-encounter',
		description: 'Encounter during which questionnaire was authored.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient',
		description: 'The patient that is the subject of the questionnaire.',
	},
	QUESTIONNAIRE: {
		name: 'questionnaire',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire',
		description: 'The questionnaire the answers are provided for.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-source',
		description: 'The person who answered the questions.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status',
		description: 'The status of the questionnaire response.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-subject',
		description: 'The subject of the questionnaire.',
	},
};
