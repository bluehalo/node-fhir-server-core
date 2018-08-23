module.exports = {
	DEPENDENT: {
		name: 'Dependent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number.',
	},
	GROUP: {
		name: 'Group',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		description: 'Group identifier.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured.',
	},
	ISSUER: {
		name: 'Issuer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-issuer',
		description: 'The identity of the insurer.',
	},
	PLAN: {
		name: 'Plan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		description: 'A plan or policy identifier.',
	},
	SEQUENCE: {
		name: 'Sequence',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		description: 'Sequence number.',
	},
	SUBPLAN: {
		name: 'Subplan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		description: 'Sub-plan identifier.',
	},
	TYPE: {
		name: 'Type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		description: 'The kind of coverage.',
	},
};
