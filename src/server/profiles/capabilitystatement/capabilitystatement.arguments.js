/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The capability statement publication date',
	},
	DESCRIPTION: {
		name: 'description',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The description of the capability statement',
	},
	EVENT: {
		name: 'event',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Event code in a capability statement',
	},
	FHIRVERSION: {
		name: 'fhirversion',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The version of FHIR',
	},
	FORMAT: {
		name: 'format',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'formats supported (xml | json | ttl | mime type)',
	},
	GUIDE: {
		name: 'guide',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Implementation guides supported',
	},
	JURISDICTION: {
		name: 'jurisdiction',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Intended jurisdiction for the capability statement',
	},
	MODE: {
		name: 'mode',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Mode - restful (server/client) or messaging (sender/receiver)',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Computationally friendly name of the capability statement',
	},
	PUBLISHER: {
		name: 'publisher',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Name of the publisher of the capability statement',
	},
	RESOURCE: {
		name: 'resource',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Name of a resource mentioned in a capability statement',
	},
	RESOURCE_PROFILE: {
		name: 'resource-profile',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'A profile id invoked in a capability statement',
	},
	SECURITY_SERVICE: {
		name: 'security-service',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates',
	},
	SOFTWARE: {
		name: 'software',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Part of a the name of a software application',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The current status of the capability statement',
	},
	SUPPORTED_PROFILE: {
		name: 'supported-profile',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'Profiles for use cases supported',
	},
	TITLE: {
		name: 'title',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The human-friendly name of the capability statement',
	},
	URL: {
		name: 'url',
		type: 'uri',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The uri that identifies the capability statement',
	},
	VERSION: {
		name: 'version',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#capabilitystatement',
		documentation: 'The business version of the capability statement',
	},
};
