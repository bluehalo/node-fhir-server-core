/**
 * @name exports
 * @static
 * @summary Arguments for the clinicalimpression query
 */
module.exports = {
	action: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.action',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-action',
		description: 'Actions taken during assessment',
	},
	assessor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.assessor',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-assessor',
		description: 'The clinician performing the assessment',
	},
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'ClinicalImpression.date',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-date',
		description: 'When the assessment occurred',
	},
	finding: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.finding.item',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-finding',
		description: 'Specific text or code for finding',
	},
	investigation: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.investigations.item',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-investigation',
		description: 'Record of a specific investigation',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-patient',
		description: 'The patient being assessed',
	},
	plan: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.plan',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-plan',
		description: 'Plan of action after assessment',
	},
	previous: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.previous',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-previous',
		description: 'Reference to last assessment',
	},
	problem: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.problem',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-problem',
		description: 'General assessment of patient state',
	},
	resolved: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.resolved',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-resolved',
		description: 'Diagnoses/conditions resolved since previous assessment',
	},
	ruledout: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.ruledOut.item',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-ruledout',
		description: 'Specific text of code for diagnosis',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.status',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-status',
		description: 'in-progress | completed | entered-in-error',
	},
	trigger: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ClinicalImpression.triggerReference',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-trigger',
		description: 'Request or event that necessitated this assessment',
	},
	'trigger-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ClinicalImpression.triggerCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/ClinicalImpression-trigger-code',
		description: 'Request or event that necessitated this assessment',
	},
};
