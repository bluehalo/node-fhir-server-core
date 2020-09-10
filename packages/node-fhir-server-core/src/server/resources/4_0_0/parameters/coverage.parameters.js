/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	beneficiary: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.beneficiary',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-beneficiary',
		description: 'Covered party',
	},
	'class-type': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.class.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-class-type',
		description: 'Coverage class (eg. plan, group)',
	},
	'class-value': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.class.value',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-class-value',
		description: 'Value of the class (eg. Plan number, group number)',
	},
	dependent: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.dependent',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured and the coverage',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.beneficiary',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-patient',
		description: 'Retrieve coverages for a patient',
	},
	payor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.payor',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-payor',
		description: 'The identity of the insurer or party paying for services',
	},
	'policy-holder': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.policyHolder',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-policy-holder',
		description: 'Reference to the policyholder',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-status',
		description: 'The status of the Coverage',
	},
	subscriber: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.subscriber',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subscriber',
		description: 'Reference to the subscriber',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		description: 'The kind of coverage (health plan, auto, Workers Compensation)',
	},
};
