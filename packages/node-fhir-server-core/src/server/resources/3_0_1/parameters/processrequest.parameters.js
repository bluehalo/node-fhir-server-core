/**
 * @name exports
 * @static
 * @summary Arguments for the processrequest query
 */
module.exports = {
	action: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ProcessRequest.action',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-action',
		description: 'The action requested by this resource',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ProcessRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-identifier',
		description: 'The business identifier of the ProcessRequest',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessRequest.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-organization',
		description: 'The organization who generated this request',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessRequest.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessRequest-provider',
		description: 'The provider who regenerated this request',
	},
};
