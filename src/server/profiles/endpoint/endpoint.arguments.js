/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CONNECTION_TYPE: {
		name: 'connection-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'Protocol/Profile/Standard to be used with this endpoint connection',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'Identifies this endpoint across multiple systems',
	},
	NAME: {
		name: 'name',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'A name that this endpoint can be identified by',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'The organization that is managing the endpoint',
	},
	PAYLOAD_TYPE: {
		name: 'payload-type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'The type of content that may be used at this endpoint (e.g. XDS Discharge summaries)',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#endpoint',
		documentation: 'The current status of the Endpoint (usually expected to be active)',
	},
};
