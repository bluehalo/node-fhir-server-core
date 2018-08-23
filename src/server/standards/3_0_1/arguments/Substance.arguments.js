module.exports = {
	CATEGORY: {
		name: 'category',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-category',
		description: 'The category of the substance.',
	},
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-code',
		description: 'The code of the substance or ingredient.',
	},
	CONTAINER_IDENTIFIER: {
		name: 'container-identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-container-identifier',
		description: 'Identifier of the package/container.',
	},
	EXPIRY: {
		name: 'expiry',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-expiry',
		description: 'Expiry date of package or container of substance.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-identifier',
		description: 'Unique identifier for the substance.',
	},
	QUANTITY: {
		name: 'quantity',
		type: 'quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-quantity',
		description: 'Amount of substance in the package.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-status',
		description: 'active | inactive | entered-in-error.',
	},
	SUBSTANCE_REFERENCE: {
		name: 'substance-reference',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-substance-reference',
		description: 'A component of the substance.',
	},
};
