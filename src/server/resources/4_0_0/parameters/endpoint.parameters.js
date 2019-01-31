/**
 * @name exports
 * @static
 * @summary Arguments for the endpoint query
 */
module.exports = {
	'connection-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Endpoint.connectionType',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-connection-type',
		description: 'Protocol/Profile/Standard to be used with this endpoint connection',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Endpoint.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-identifier',
		description: 'Identifies this endpoint across multiple systems',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Endpoint.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-name',
		description: 'A name that this endpoint can be identified by',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Endpoint.managingOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-organization',
		description: 'The organization that is managing the endpoint',
	},
	'payload-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Endpoint.payloadType',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-payload-type',
		description: 'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Endpoint.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-status',
		description: 'The current status of the Endpoint (usually expected to be active)',
	},
};
