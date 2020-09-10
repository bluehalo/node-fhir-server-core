/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductindication query
 */
module.exports = {
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductIndication.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductIndication-subject',
		description: 'The medication for which this is an indication',
	},
};
