/**
 * @name exports
 * @static
 * @summary Arguments for the condition query
 */
module.exports = {
	asserter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Condition.asserter',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-asserter',
		description: 'Person who asserts this condition',
	},
	'body-site': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.bodySite',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-body-site',
		description: 'Anatomical location, if relevant',
	},
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-category',
		description: 'The category of the condition',
	},
	clinicalstatus: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.clinicalStatus',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-clinicalstatus',
		description: 'The clinical status of the condition',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-code',
		description: 'Code for the condition',
	},
	'date-recorded': {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Condition.dateRecorded',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-date-recorded',
		description: 'A date, when the Condition statement was documented',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Condition.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-encounter',
		description: 'Encounter when condition first asserted',
	},
	evidence: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.evidence.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-evidence',
		description: 'Manifestation/symptom',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-identifier',
		description: 'A unique identifier of the condition record',
	},
	onset: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Condition.onsetDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset',
		description: 'Date related onsets (dateTime and Period)',
	},
	'onset-info': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Condition.onsetDateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-onset-info',
		description: 'Other onsets (boolean, age, range, string)',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Condition.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-patient',
		description: 'Who has the condition?',
	},
	severity: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.severity',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-severity',
		description: 'The severity of the condition',
	},
	stage: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Condition.stage.summary',
		definition: 'http://hl7.org/fhir/SearchParameter/Condition-stage',
		description: 'Simple summary (disease specific)',
	},
	age: {
		type: 'number',
		fhirtype: 'number',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/condition-daf-Condition-age',
		description: 'Search based on Condition onsetAge',
	},
};
