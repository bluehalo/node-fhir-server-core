/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ACTION: {
		name: 'action',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Actions controlled by this consent',
	},
	ACTOR: {
		name: 'actor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Resource for the actor (or group, by role)',
	},
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Classification of the consent statement - for indexing/retrieval',
	},
	CONSENTOR: {
		name: 'consentor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Who is agreeing to the policy and exceptions',
	},
	DATA: {
		name: 'data',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'The actual data reference',
	},
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'When this Consent was created or indexed',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Identifier for this record (external references)',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Custodian of the consent',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Who the consent applies to',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Period that this consent applies',
	},
	PURPOSE: {
		name: 'purpose',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Context of activities for which the agreement is made',
	},
	SECURITYLABEL: {
		name: 'securitylabel',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Security Labels that define affected resources',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'Source from which this consent is taken',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#consent',
		documentation: 'draft | proposed | active | rejected | inactive | entered-in-error',
	},
};
