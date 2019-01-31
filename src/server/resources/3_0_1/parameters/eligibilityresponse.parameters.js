/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityresponse query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'EligibilityResponse.created',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-created',
		description: 'The creation date',
	},
	disposition: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'EligibilityResponse.disposition',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-disposition',
		description: 'The contents of the disposition message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EligibilityResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier',
		description: 'The business identifier',
	},
	insurer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.insurer',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-insurer',
		description: 'The organization which generated this resource',
	},
	outcome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EligibilityResponse.outcome',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-outcome',
		description: 'The processing outcome',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request',
		description: 'The EligibilityRequest reference',
	},
	'request-organization': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.requestOrganization',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-organization',
		description: 'The EligibilityRequest organization',
	},
	'request-provider': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityResponse.requestProvider',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-provider',
		description: 'The EligibilityRequest provider',
	},
};
