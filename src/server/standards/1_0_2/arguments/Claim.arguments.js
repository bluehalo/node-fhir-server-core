module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-identifier',
		documentation: 'The primary identifier of the financial resource.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-patient',
		documentation: 'Patient.',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-priority',
		documentation: 'Processing priority requested.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-provider',
		documentation: 'Provider responsible for the claim.',
	},
	USE: {
		name: 'use',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Claim-use',
		documentation: 'The kind of financial resource.',
	},
};
