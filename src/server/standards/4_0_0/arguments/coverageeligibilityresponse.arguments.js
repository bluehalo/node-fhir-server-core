/**
 * @name exports
 * @static
 * @summary Arguments for the coverageeligibilityresponse query
 */
module.exports = {
	created: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'CoverageEligibilityResponse.created',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-created',
		description: 'The creation date',
	},
	disposition: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'CoverageEligibilityResponse.disposition',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-disposition',
		description: 'The contents of the disposition message',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-identifier',
		description: 'The business identifier',
	},
	insurer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.insurer',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-insurer',
		description: 'The organization which generated this resource',
	},
	outcome: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.outcome',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-outcome',
		description: 'The processing outcome',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-patient',
		description: 'The reference to the patient',
	},
	request: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.request',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-request',
		description: 'The EligibilityRequest reference',
	},
	requestor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'CoverageEligibilityResponse.requestor',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-requestor',
		description: 'The EligibilityRequest provider',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'CoverageEligibilityResponse.status',
		definition: 'http://hl7.org/fhir/SearchParameter/CoverageEligibilityResponse-status',
		description: 'The EligibilityRequest status',
	},
};
