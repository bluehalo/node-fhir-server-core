module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-created',
		documentation: 'The creation date.',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-disposition',
		documentation: 'The contents of the disposition message.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-identifier',
		documentation: 'The business identifier.',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-insurer',
		documentation: 'The organization which generated this resource.',
	},
	OUTCOME: {
		name: 'outcome',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-outcome',
		documentation: 'The processing outcome.',
	},
	REQUEST: {
		name: 'request',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request',
		documentation: 'The EligibilityRequest reference.',
	},
	REQUEST_ORGANIZATION: {
		name: 'request-organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-organization',
		documentation: 'The EligibilityRequest organization.',
	},
	REQUEST_PROVIDER: {
		name: 'request-provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityResponse-request-provider',
		documentation: 'The EligibilityRequest provider.',
	},
};
