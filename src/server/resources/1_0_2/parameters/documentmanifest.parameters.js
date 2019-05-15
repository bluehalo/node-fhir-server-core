/**
 * @name exports
 * @static
 * @summary Arguments for the documentmanifest query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.author',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-author',
		description: 'Who and/or what authored the manifest',
	},
	'content-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.content.pReference',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-content-ref',
		description: 'Contents of this set of documents',
	},
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'DocumentManifest.created',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-created',
		description: 'When this document manifest created',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'DocumentManifest.description',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-description',
		description: 'Human-readable description (title)',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.masterIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-identifier',
		description: 'Unique Identifier for the set of documents',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-patient',
		description: 'The subject of the set of documents',
	},
	recipient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.recipient',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-recipient',
		description: 'Intended to get notified about this set of documents',
	},
	'related-id': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.related.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-id',
		description: 'Identifiers of things that are related',
	},
	'related-ref': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.related.ref',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-related-ref',
		description: 'Related Resource',
	},
	source: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'DocumentManifest.source',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-source',
		description: 'The source system/application/software',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-status',
		description: 'current | superseded | entered-in-error',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'DocumentManifest.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-subject',
		description: 'The subject of the set of documents',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'DocumentManifest.type',
		definition: 'http://hl7.org/fhir/SearchParameter/DocumentManifest-type',
		description: 'Kind of document set',
	},
};
