/**
 * @name exports
 * @static
 * @summary Arguments for the riskassessment query
 */
module.exports = {
	condition: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RiskAssessment.condition',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-condition',
		description: 'Condition assessed',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RiskAssessment.date',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-date',
		description: 'When was assessment made?',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RiskAssessment.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-encounter',
		description: 'Where was assessment performed?',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskAssessment.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-identifier',
		description: 'Unique identifier for the assessment',
	},
	method: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RiskAssessment.method',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-method',
		description: 'Evaluation mechanism',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RiskAssessment.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-patient',
		description: 'Who/what does assessment apply to?',
	},
	performer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RiskAssessment.performer',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-performer',
		description: 'Who did assessment?',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RiskAssessment.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/RiskAssessment-subject',
		description: 'Who/what does assessment apply to?',
	},
};
