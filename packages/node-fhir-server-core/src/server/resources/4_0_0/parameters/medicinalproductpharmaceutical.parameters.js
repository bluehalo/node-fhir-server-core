/**
 * @name exports
 * @static
 * @summary Arguments for the medicinalproductpharmaceutical query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductPharmaceutical.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-identifier',
		description: 'An identifier for the pharmaceutical medicinal product',
	},
	route: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductPharmaceutical.routeOfAdministration.code',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-route',
		description: 'Coded expression for the route',
	},
	'target-species': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'MedicinalProductPharmaceutical.routeOfAdministration.targetSpecies.code',
		definition: 'http://hl7.org/fhir/SearchParameter/MedicinalProductPharmaceutical-target-species',
		description: 'Coded expression for the species',
	},
};
