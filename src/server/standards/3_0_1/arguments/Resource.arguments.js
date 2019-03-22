/**
 * @name exports
 * @static
 * @summary Arguments for the resource query
 */
module.exports = {
	_content: {
		type: 'string',
		fhirtype: 'string',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-content',
		description: 'Search on the entire content of the resource',
	},
	_id: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Resource.id',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-id',
		description: 'Logical id of this artifact',
	},
	_lastUpdated: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Resource.meta.lastUpdated',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-lastUpdated',
		description: 'When the resource version last changed',
	},
	_profile: {
		type: 'uri',
		fhirtype: 'uri',
		xpath: 'Resource.meta.profile',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-profile',
		description: 'Profiles this resource claims to conform to',
	},
	_query: {
		type: 'token',
		fhirtype: 'token',
		xpath: '',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-query',
		description: 'A custom search profile that describes a specific defined query operation',
	},
	_security: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Resource.meta.security',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-security',
		description: 'Security Labels applied to this resource',
	},
	_tag: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Resource.meta.tag',
		definition: 'http://hl7.org/fhir/SearchParameter/Resource-tag',
		description: 'Tags applied to this resource',
	},
};
