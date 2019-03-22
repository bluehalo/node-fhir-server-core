/**
 * @name exports
 * @static
 * @summary Arguments for the medication query
 */
module.exports = {
	code: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.code',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-code',
		description: 'Codes that identify this medication',
	},
	container: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.package.container',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		description: 'E.g. box, vial, blister-pack',
	},
	content: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.package.content.item',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-content',
		description: 'A product in the package',
	},
	form: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.product.form',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'powder | tablets | carton +',
	},
	ingredient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.product.ingredient.item',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'The product contained',
	},
	manufacturer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Manufacturer of the item',
	},
};
