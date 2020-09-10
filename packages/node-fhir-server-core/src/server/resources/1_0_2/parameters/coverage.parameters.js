/**
 * @name exports
 * @static
 * @summary Arguments for the coverage query
 */
module.exports = {
	dependent: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.dependent',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number',
	},
	group: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.group',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		description: 'Group identifier',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured',
	},
	issuer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Coverage.issuer',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-issuer',
		description: 'The identity of the insurer',
	},
	plan: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.plan',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		description: 'A plan or policy identifier',
	},
	sequence: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.sequence',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		description: 'Sequence number',
	},
	subplan: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.subPlan',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		description: 'Sub-plan identifier',
	},
	type: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Coverage.type',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		description: 'The kind of coverage',
	},
};
