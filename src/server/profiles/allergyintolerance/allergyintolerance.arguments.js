/**
* @name exports
* @description All the possible patient arguments defined in one place
*/
module.exports = {
	ASSERTER: {
		name: 'asserter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Source of the information about the allergy'
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'food | medication | environment | biologic'
	},
	CLINICAL_STATUS: {
		name: 'clinical-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'active | inactive | resolved'
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Code that identifies the allergy or intolerance'
	},
	CRITICALITY: {
		name: 'criticality',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'low | high | unable-to-assess'
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Date record was believed accurate'
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'External ids for this item'
	},
	LAST_DATE: {
		name: 'last-date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Date(/time) of last known occurrence of a reaction'
	},
	MANIFESTATION: {
		name: 'manifestation',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Clinical symptoms/signs associated with the Event'
	},
	ONSET: {
		name: 'onset',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Date(/time) when manifestations showed'
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Who the sensitivity is for'
	},
	RECORDER: {
		name: 'recorder',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'Who recorded the sensitivity'
	},
	ROUTE: {
		name: 'route',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'How the subject was exposed to the substance'
	},
	SEVERITY: {
		name: 'severity',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'mild | moderate | severe (of event as a whole)'
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'allergy | intolerance - Underlying mechanism (if known)'
	},
	VERIFICATION_STATUS: {
		name: 'verification-status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#allergyintolerance',
		documentation: 'unconfirmed | confirmed | refuted | entered-in-error'
	}
};
