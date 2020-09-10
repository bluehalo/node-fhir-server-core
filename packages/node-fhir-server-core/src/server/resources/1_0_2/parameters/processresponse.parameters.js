/**
 * @name exports
 * @static
 * @summary Arguments for the processresponse query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'ProcessResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-identifier',
		description: 'The business identifier of the Explanation of Benefit',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessResponse.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-organization',
		description: 'The organization who generated this resource',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-request',
		description: 'The reference to the claim',
	},
	requestorganization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessResponse.requestOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-requestorganization',
		description: 'The Organization who is responsible the request transaction',
	},
	requestprovider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'ProcessResponse.requestProvider',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-requestprovider',
		description: 'The Provider who is responsible the request transaction',
	},
};
