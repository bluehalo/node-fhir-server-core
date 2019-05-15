/**
 * @name exports
 * @static
 * @summary Arguments for the conformance query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Conformance.date',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-date',
		description: 'The conformance statement publication date',
	},
	description: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Conformance.description',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-description',
		description: 'Text search in the description of the conformance statement',
	},
	event: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.messaging.event.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-event',
		description: 'Event code in a conformance statement',
	},
	fhirversion: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.version',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-fhirversion',
		description: 'The version of FHIR',
	},
	format: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.format',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-format',
		description: 'formats supported (xml | json | mime type)',
	},
	mode: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.rest.mode',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-mode',
		description: 'Mode - restful (server/client) or messaging (sender/receiver)',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Conformance.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-name',
		description: 'Name of the conformance statement',
	},
	profile: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Conformance.rest.resource.profile',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-profile',
		description: 'A profile id invoked in a conformance statement',
	},
	publisher: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Conformance.publisher',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-publisher',
		description: 'Name of the publisher of the conformance statement',
	},
	resource: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.rest.resource.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-resource',
		description: 'Name of a resource mentioned in a conformance statement',
	},
	security: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.rest.security.service',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-security',
		description: 'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates',
	},
	software: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Conformance.software.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-software',
		description: 'Part of a the name of a software application',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-status',
		description: 'The current status of the conformance statement',
	},
	'supported-profile': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Conformance.profile',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-supported-profile',
		description: 'Profiles for use cases supported',
	},
	url: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Conformance.url',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-url',
		description: 'The uri that identifies the conformance statement',
	},
	version: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Conformance.version',
		definition: 'http://hl7.org/fhir/SearchParameter/Conformance-version',
		description: 'The version identifier of the conformance statement',
	},
};
