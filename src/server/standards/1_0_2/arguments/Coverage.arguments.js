module.exports = {
	DEPENDENT: {
		name: 'dependent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		description: 'Dependent number.',
	},
	GROUP: {
		name: 'group',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		description: 'Group identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		description: 'The primary identifier of the insured.',
	},
	ISSUER: {
		name: 'issuer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-issuer',
		description: 'The identity of the insurer.',
	},
	PLAN: {
		name: 'plan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		description: 'A plan or policy identifier.',
	},
	SEQUENCE: {
		name: 'sequence',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		description: 'Sequence number.',
	},
	SUBPLAN: {
		name: 'subplan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		description: 'Sub-plan identifier.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		description: 'The kind of coverage.',
	},
};
