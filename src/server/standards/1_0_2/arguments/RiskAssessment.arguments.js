module.exports = {
	CONDITION: {
		name: 'Condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-condition',
		description: 'Condition assessed.',
	},
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-date',
		description: 'When was assessment made?.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-encounter',
		description: 'Where was assessment performed?.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-identifier',
		description: 'Unique identifier for the assessment.',
	},
	METHOD: {
		name: 'Method',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-method',
		description: 'Evaluation mechanism.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-patient',
		description: 'Who/what does assessment apply to?.',
	},
	PERFORMER: {
		name: 'Performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-performer',
		description: 'Who did assessment?.',
	},
	SUBJECT: {
		name: 'Subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-subject',
		description: 'Who/what does assessment apply to?.',
	},
};
