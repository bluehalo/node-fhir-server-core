/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	ABATEMENT_AGE: {
		name: 'abatement-age',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Abatement as age or age range'
	},
	ABATEMENT_BOOLEAN: {
		name: 'abatement-boolean',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Abatement boolean (boolean is true or non-boolean values are present)'
	},
	ABATEMENT_DATE: {
		name: 'abatement-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Date-related abatements (dateTime and period)'
	},
	ABATEMENT_STRING: {
		name: 'abatement-string',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Abatement as a string'
	},
	ASSERTED_DATE: {
		name: 'asserted-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Date record was believed accurate'
	},
	ASSERTER: {
		name: 'asserter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Person who asserts this condition'
	},
	BODY_SITE: {
		name: 'body-site',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Anatomical location, if relevant'
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'The category of the condition'
	},
	CLINICAL_STATUS: {
		name: 'clinical-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'The clinical status of the condition'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Code for the condition'
	},
	CONTEXT: {
		name: 'context',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Encounter or episode when condition first asserted'
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Encounter when condition first asserted'
	},
	EVIDENCE: {
		name: 'evidence',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Manifestation/symptom'
	},
	EVIDENCE_DETAIL: {
		name: 'evidence-detail',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Supporting information found elsewhere'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'A unique identifier of the condition record'
	},
	ONSET_AGE: {
		name: 'onset-age',
		type: 'quantity',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Onsets as age or age range'
	},
	ONSET_DATE: {
		name: 'onset-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Date related onsets (dateTime and Period)'
	},
	ONSET_INFO: {
		name: 'onset-info',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Onsets as a string'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Who has the condition?'
	}
	,
	SEVERITY: {
		name: 'severity',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'The severity of the condition'
	},
	STAGE: {
		name: 'stage',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Simple summary (disease specific)'
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'Who has the condition?'
	},
	VERIFICATION_STATUS: {
		name: 'verification-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#condition',
		documentation: 'provisional | differential | confirmed | refuted | entered-in-error | unknown'
	}
};
