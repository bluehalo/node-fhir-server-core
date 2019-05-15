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
	class: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.class',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-class',
		description: 'Class identifier',
	},
	dependent: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.dependent',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number',
	},
	group: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.group',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		description: 'Group identifier',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured and the coverage',
	},
	payor: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.payor',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-payor',
		description: 'The identity of the insurer or party paying for services',
	},
	plan: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.plan',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		description: 'A plan or policy identifier',
	},
	'policy-holder': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.policyHolder',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-policy-holder',
		description: 'Reference to the policyholder',
	},
	sequence: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.sequence',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		description: 'Sequence number',
	},
	subclass: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subClass',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subclass',
		description: 'Sub-class identifier',
	},
	subgroup: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subGroup',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subgroup',
		description: 'Sub-group identifier',
	},
	subplan: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Coverage.grouping.subPlan',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		description: 'Sub-plan identifier',
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
