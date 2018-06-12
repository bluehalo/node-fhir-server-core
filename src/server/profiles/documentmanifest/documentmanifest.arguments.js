/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	AUTHOR: {
		name: 'author',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Who and/or what authored the manifest',
	},
	CONTENT_REF: {
		name: 'content-ref',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Contents of this set of documents',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'When this document manifest created',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Human-readable description (title)',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Unique Identifier for the set of documents',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'The subject of the set of documents',
	},
	RECIPIENT: {
		name: 'recipient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Intended to get notified about this set of documents',
	},
	RELATED_ID: {
		name: 'related-id',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Identifiers of things that are related',
	},
	RELATED_REF: {
		name: 'related-ref',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Related Resource',
	},
	SOURCE: {
		name: 'source',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'The source system/application/software',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'current | superseded | entered-in-error',
	},
	SUBJECT: {
		name: 'subject',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'The subject of the set of documents',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#documentmanifest',
		documentation: 'Kind of document set',
	},
};
