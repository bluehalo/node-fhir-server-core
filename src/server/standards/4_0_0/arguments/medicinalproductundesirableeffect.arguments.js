/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductundesirableeffect query
 */
module.exports = {
	subject: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'MedicinalProductUndesirableEffect.subject',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductUndesirableEffect-subject',
		description: 'The medication for which this is an undesirable effect',
	},
};
