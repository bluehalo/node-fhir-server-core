module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-created',
		documentation: 'The creation date for the EOB.',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer',
		documentation: 'The party who is responsible for the request.',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility',
		documentation: 'Facility responsible for the goods and services.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier',
		documentation: 'The business identifier of the Eligibility.',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization',
		documentation: 'The reference to the providing organization.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient',
		documentation: 'The reference to the patient.',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider',
		documentation: 'The reference to the provider.',
	},
};
