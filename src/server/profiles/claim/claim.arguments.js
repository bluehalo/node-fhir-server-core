/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CARE_TEAM: {
		name: 'care-team',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Member of the CareTeam',
	},
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The creation date for the Claim',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Encounters associated with a billed line item',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The party responsible for the entry of the Claim',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Facility responsible for the goods and services',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The primary identifier of the financial resource',
	},
	INSURER: {
		name: 'insurer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The target payor/insurer for the Claim',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The reference to the providing organization',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Patient receiving the services',
	},
	PAYEE: {
		name: 'payee',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The party receiving any payment for the Claim',
	},
	PRIORITY: {
		name: 'priority',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Processing priority requested',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'Provider responsible for the Claim',
	},
	USE: {
		name: 'use',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#claim',
		documentation: 'The kind of financial resource',
	},
};
