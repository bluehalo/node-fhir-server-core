/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	CREATED: {
		name: 'created',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The creation date for the EOB',
	},
	ENTERER: {
		name: 'enterer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The party who is responsible for the request',
	},
	FACILITY: {
		name: 'facility',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'Facility responsible for the goods and services',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The business identifier of the Eligibility',
	},
	ORGANIZATION: {
		name: 'organization',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The reference to the providing organization',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The reference to the patient',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#eligibilityrequest',
		documentation: 'The reference to the provider',
	},
};
