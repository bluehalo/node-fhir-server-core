module.exports = {
	DEPENDENT: {
		name: 'dependent',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-dependent',
		documentation: 'Dependent number.',
	},
	GROUP: {
		name: 'group',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-group',
		documentation: 'Group identifier.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-identifier',
		documentation: 'The primary identifier of the insured.',
	},
	ISSUER: {
		name: 'issuer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-issuer',
		documentation: 'The identity of the insurer.',
	},
	PLAN: {
		name: 'plan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-plan',
		documentation: 'A plan or policy identifier.',
	},
	SEQUENCE: {
		name: 'sequence',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-sequence',
		documentation: 'Sequence number.',
	},
	SUBPLAN: {
		name: 'subplan',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-subplan',
		documentation: 'Sub-plan identifier.',
	},
	TYPE: {
		name: 'type',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Coverage-type',
		documentation: 'The kind of coverage.',
	},
};
