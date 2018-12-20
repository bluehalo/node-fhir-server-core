module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-identifier',
		documentation: 'The business identifier of the Explanation of Benefit.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-organization',
		documentation: 'The organization who generated this resource.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-request',
		documentation: 'The reference to the claim.',
	},
	REQUESTORGANIZATION: {
		name: 'requestorganization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-requestorganization',
		documentation: 'The Organization who is responsible the request transaction.',
	},
	REQUESTPROVIDER: {
		name: 'requestprovider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/ProcessResponse-requestprovider',
		documentation: 'The Provider who is responsible the request transaction.',
	},
};
