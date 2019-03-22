/**
 * @name exports
 * @static
 * @summary Arguments for the substance query
 */
module.exports = {
	category: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Substance.category',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-category',
		description: 'The category of the substance',
	},
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Substance.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-code',
		description: 'The code of the substance or ingredient',
	},
	'container-identifier': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Substance.instance.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-container-identifier',
		description: 'Identifier of the package/container',
	},
	expiry: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'Substance.instance.expiry',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-expiry',
		description: 'Expiry date of package or container of substance',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Substance.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-identifier',
		description: 'Unique identifier for the substance',
	},
	quantity: {
		type: 'quantity',
		fhirtype: 'quantity',
		xpath: 'Substance.instance.quantity',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-quantity',
		description: 'Amount of substance in the package',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Substance.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-status',
		description: 'active | inactive | entered-in-error',
	},
	'substance-reference': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Substance.ingredient.substanceReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Substance-substance-reference',
		description: 'A component of the substance',
	},
};
