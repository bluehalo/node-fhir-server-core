module.exports = {
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-condition',
		documentation: 'Condition assessed.',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-date',
		documentation: 'When was assessment made?.',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-encounter',
		documentation: 'Where was assessment performed?.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-identifier',
		documentation: 'Unique identifier for the assessment.',
	},
	METHOD: {
		name: 'method',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-method',
		documentation: 'Evaluation mechanism.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-patient',
		documentation: 'Who/what does assessment apply to?.',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-performer',
		documentation: 'Who did assessment?.',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-subject',
		documentation: 'Who/what does assessment apply to?.',
	},
};
