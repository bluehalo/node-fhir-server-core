/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductinteraction query
 */
module.exports = {
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductInteraction.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductInteraction-subject',
		description: 'The medication for which this is an interaction',
	},
};
