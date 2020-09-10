/**
 * @name exports
 * @static
 * @summary Arguments for the requestgroup query
 */
module.exports = {
	author: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.author',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-author',
		description: 'The author of the request group',
	},
	authored: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'RequestGroup.authoredOn',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-authored',
		description: 'The date the request group was authored',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.code',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-code',
		description: 'The code of the request group',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-encounter',
		description: 'The encounter the request group applies to',
	},
	'group-identifier': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.groupIdentifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-group-identifier',
		description: 'The group identifier for the request group',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-identifier',
		description: 'External identifiers for the request group',
	},
	'instantiates-canonical': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.instantiatesCanonical',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-canonical',
		description: 'The FHIR-based definition from which the request group is realized',
	},
	'instantiates-uri': {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'RequestGroup.instantiatesUri',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-instantiates-uri',
		description: 'The external definition from which the request group is realized',
	},
	intent: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.intent',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-intent',
		description: 'The intent of the request group',
	},
	participant: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.action.participant',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-participant',
		description: 'The participant in the requests in the group',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-patient',
		description: 'The identity of a patient to search for request groups',
	},
	priority: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.priority',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-priority',
		description: 'The priority of the request group',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'RequestGroup.status',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-status',
		description: 'The status of the request group',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'RequestGroup.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/RequestGroup-subject',
		description: 'The subject that the request group is about',
	},
};
