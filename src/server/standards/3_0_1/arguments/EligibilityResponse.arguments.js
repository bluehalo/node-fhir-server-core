module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-created',
		description: 'The creation date.',
	},
	DISPOSITION: {
		name: 'Disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-disposition',
		description: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier',
		description: 'The business identifier.',
	},
	INSURER: {
		name: 'Insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-insurer',
		description: 'The organization which generated this resource.',
	},
	OUTCOME: {
		name: 'Outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-outcome',
		description: 'The processing outcome.',
	},
	REQUEST: {
		name: 'Request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request',
		description: 'The EligibilityRequest reference.',
	},
	REQUEST_ORGANIZATION: {
		name: 'Request_organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-organization',
		description: 'The EligibilityRequest organization.',
	},
	REQUEST_PROVIDER: {
		name: 'Request_provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-provider',
		description: 'The EligibilityRequest provider.',
	},
};
