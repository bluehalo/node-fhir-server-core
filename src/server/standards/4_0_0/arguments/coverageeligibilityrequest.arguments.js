/**
 * @name exports
 * @static
 * @summary Arguments for the coverageeligibilityrequest query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CoverageEligibilityRequest.created',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-created',
		description: 'The creation date for the EOB',
	},
	enterer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.enterer',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-enterer',
		description: 'The party who is responsible for the request',
	},
	facility: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.facility',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-facility',
		description: 'Facility responsible for the goods and services',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CoverageEligibilityRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-identifier',
		description: 'The business identifier of the Eligibility',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-patient',
		description: 'The reference to the patient',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityRequest.provider',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-provider',
		description: 'The reference to the provider',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CoverageEligibilityRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityRequest-status',
		description: 'The status of the EligibilityRequest',
	},
};
