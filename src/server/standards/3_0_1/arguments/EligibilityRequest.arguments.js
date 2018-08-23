module.exports = {
	CREATED: {
		name: 'Created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-created',
		description: 'The creation date for the EOB.',
	},
	ENTERER: {
		name: 'Enterer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer',
		description: 'The party who is responsible for the request.',
	},
	FACILITY: {
		name: 'Facility',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility',
		description: 'Facility responsible for the goods and services.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier',
		description: 'The business identifier of the Eligibility.',
	},
	ORGANIZATION: {
		name: 'Organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization',
		description: 'The reference to the providing organization.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient',
		description: 'The reference to the patient.',
	},
	PROVIDER: {
		name: 'Provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider',
		description: 'The reference to the provider.',
	},
};
