/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CONDITION: {
		name: 'condition',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Condition assessed',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'When was assessment made?',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Where was assessment performed?',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Unique identifier for the assessment',
	},
	METHOD: {
		name: 'method',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Evaluation mechanism',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Who/what does assessment apply to?',
	},
	PERFORMER: {
		name: 'performer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Who did assessment?',
	},
	PROBABILITY: {
		name: 'probability',
		type: 'number',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Likelihood of specified outcome',
	},
	RISK: {
		name: 'risk',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Likelihood of specified outcome as a qualitative value',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#riskassessment',
		documentation: 'Who/what does assessment apply to?',
	},
};
