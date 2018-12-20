module.exports = {
	CONNECTION_TYPE: {
		name: 'connection-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-connection-type',
		documentation: 'Protocol/Profile/Standard to be used with this endpoint connection.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-identifier',
		documentation: 'Identifies this endpoint across multiple systems.',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-name',
		documentation: 'A name that this endpoint can be identified by.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-organization',
		documentation: 'The organization that is managing the endpoint.',
	},
	PAYLOAD_TYPE: {
		name: 'payload-type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-payload-type',
		documentation: 'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries).',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Endpoint-status',
		documentation: 'The current status of the Endpoint (usually expected to be active).',
	},
};
