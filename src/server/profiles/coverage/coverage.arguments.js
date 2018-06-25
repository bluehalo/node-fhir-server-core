/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	BENEFICIARY: {
		name: 'beneficiary',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Covered party',
	},
	CLASS: {
		name: 'class',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Class identifier',
	},
	DEPENDENT: {
		name: 'dependent',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Dependent number',
	},
	GROUP: {
		name: 'group',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Group identifier',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'The primary identifier of the insured and the coverage',
	},
	PAYOR: {
		name: 'payor',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'The identity of the insurer or party paying for services',
	},
	PLAN: {
		name: 'plan',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'A plan or policy identifier',
	},
	POLICY_HOLDER: {
		name: 'policy-holder',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Reference to the policyholder',
	},
	SEQUENCE: {
		name: 'sequence',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Sequence number',
	},
	SUBCLASS: {
		name: 'subclass',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Sub-class identifier',
	},
	SUBGROUP: {
		name: 'subgroup',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Sub-group identifier',
	},
	SUBPLAN: {
		name: 'subplan',
		type: 'string',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Sub-plan identifier',
	},
	SUBSCRIBER: {
		name: 'subscriber',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'Reference to the subscriber',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#coverage',
		documentation: 'The kind of coverage (health plan, auto, Workers Compensation)',
	},
};
