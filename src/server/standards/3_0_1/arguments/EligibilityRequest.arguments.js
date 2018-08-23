module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-created',
		description: 'The creation date for the EOB.',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer',
		description: 'The party who is responsible for the request.',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility',
		description: 'Facility responsible for the goods and services.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier',
		description: 'The business identifier of the Eligibility.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization',
		description: 'The reference to the providing organization.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient',
		description: 'The reference to the patient.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider',
		description: 'The reference to the provider.',
	},
};
