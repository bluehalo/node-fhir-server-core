/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproduct query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProduct.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProduct-identifier',
		description: 'Business identifier for this product. Could be an MPID',
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'MedicinalProduct.name.productName',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProduct-name',
		description: 'The full product name',
	},
	'name-language': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProduct.name.countryLanguage.language',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProduct-name-language',
		description: 'Language code for this name',
	},
};
