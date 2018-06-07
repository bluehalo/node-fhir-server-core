/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CARE_TEAM: {
		name: 'care-team',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'Member of the CareTeam',
	},
	CLAIM: {
		name: 'claim',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The reference to the claim',
	},
	COVERAGE: {
		name: 'coverage',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The plan under which the claim was adjudicated',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The creation date for the EOB',
	},
	DISPOSITION: {
		name: 'disposition',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The contents of the disposition message',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'Encounters associated with a billed line item',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The party responsible for the entry of the Claim',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'Facility responsible for the goods and services',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The business identifier of the Explanation of Benefit',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The reference to the providing organization',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The reference to the patient',
	},
	PAYEE: {
		name: 'payee',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The party receiving any payment for the Claim',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#explanationofbenefit',
		documentation: 'The reference to the provider',
	},
};
