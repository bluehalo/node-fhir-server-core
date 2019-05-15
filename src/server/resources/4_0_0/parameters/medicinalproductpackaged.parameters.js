/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductpackaged query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductPackaged.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-identifier',
		description: 'Unique identifier',
	},
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductPackaged.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductPackaged-subject',
		description: 'The product with this is a pack for',
	},
};
