module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-identifier',
		description: 'The business identifier of the Explanation of Benefit.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-organization',
		description: 'The organization who generated this resource.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-request',
		description: 'The reference to the claim.',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-request-organization',
		description: 'The Organization who is responsible the request transaction.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-request-provider',
		description: 'The Provider who is responsible the request transaction.',
	},
};
