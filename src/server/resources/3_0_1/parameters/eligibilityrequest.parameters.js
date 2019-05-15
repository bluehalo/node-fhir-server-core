/**
 * @name exports
 * @static
 * @summary Arguments for the eligibilityrequest query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'EligibilityRequest.created',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-created',
		description: 'The creation date for the EOB',
	},
	enterer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.enterer',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-enterer',
		description: 'The party who is responsible for the request',
	},
	facility: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.facility',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-facility',
		description: 'Facility responsible for the goods and services',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'EligibilityRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-identifier',
		description: 'The business identifier of the Eligibility',
	},
	organization: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.organization',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-organization',
		description: 'The reference to the providing organization',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-patient',
		description: 'The reference to the patient',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'EligibilityRequest.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/EligibilityRequest-provider',
		description: 'The reference to the provider',
	},
};
