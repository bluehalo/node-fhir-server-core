/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductcontraindication query
 */
module.exports = {
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductContraindication.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductContraindication-subject',
		description: 'The medication for which this is an contraindication',
	},
};
