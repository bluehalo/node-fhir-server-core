/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHENTICATOR: {
		name: 'authenticator',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Who/what authenticated the document',
	},
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Who and/or what authored the document',
	},
	CLASS: {
		name: 'class',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Categorization of document',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Document creation time',
	},
	CUSTODIAN: {
		name: 'custodian',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Organization which maintains the document',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Human-readable description (title)',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Context of the document content',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Main clinical acts documented',
	},
	FACILITY: {
		name: 'facility',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Kind of facility where patient was seen',
	},
	FORMAT: {
		name: 'format',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Format/content rules for the document',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Master Version Specific Identifier',
	},
	INDEXED: {
		name: 'indexed',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'When this document reference was created',
	},
	LANGUAGE: {
		name: 'language',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Human language of the content (BCP-47)',
	},
	LOCATION: {
		name: 'location',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Uri where the data can be found',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Who/what is the subject of the document',
	},
	PERIOD: {
		name: 'period',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Time of service that is being documented',
	},
	RELATED_ID: {
		name: 'related-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Identifier of related objects or events',
	},
	RELATED_REF: {
		name: 'related-ref',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Related Resource',
	},
	RELATESTO: {
		name: 'relatesto',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Target of the relationship',
	},
	RELATION: {
		name: 'relation',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'replaces | transforms | signs | appends',
	},
	RELATIONSHIP: {
		name: 'relationship',
		type: 'composite',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Combination of relation and relatesTo',
	},
	SECURITYLABEL: {
		name: 'securitylabel',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Document security-tags',
	},
	SETTING: {
		name: 'setting',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Additional details about where the content was created (e.g. clinical specialty)',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'current | superseded | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Who/what is the subject of the document',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentreference',
		documentation: 'Kind of document (LOINC if possible)',
	},
};
