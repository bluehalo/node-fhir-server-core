module.exports = {
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-condition',
		description: 'Condition assessed.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-date',
		description: 'When was assessment made?.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-encounter',
		description: 'Where was assessment performed?.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-identifier',
		description: 'Unique identifier for the assessment.',
	},
	METHOD: {
		name: 'method',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-method',
		description: 'Evaluation mechanism.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-patient',
		description: 'Who/what does assessment apply to?.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-performer',
		description: 'Who did assessment?.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-subject',
		description: 'Who/what does assessment apply to?.',
	},
};
