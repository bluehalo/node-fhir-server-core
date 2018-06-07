/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTION: {
		name: 'action',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Action taken as part of assessment procedure',
	},
	ASSESSOR: {
		name: 'assessor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'The clinician performing the assessment',
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Encounter or Episode created from',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'When the assessment was documented',
	},
	FINDING_CODE: {
		name: 'finding-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'What was found',
	},
	FINDING_REF: {
		name: 'finding-ref',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'What was found',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Business identifier',
	},
	INVESTIGATION: {
		name: 'investigation',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Record of a specific investigation',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Patient or group assessed',
	},
	PREVIOUS: {
		name: 'previous',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Reference to last assessment',
	},
	PROBLEM: {
		name: 'problem',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Relevant impressions of patient state',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'draft | completed | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#clinicalimpression',
		documentation: 'Patient or group assessed',
	},
};
