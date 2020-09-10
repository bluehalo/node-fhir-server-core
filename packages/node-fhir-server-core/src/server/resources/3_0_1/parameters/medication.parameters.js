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
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		description:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  ',
	},
	container: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.package.container',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		description: 'E.g. box, vial, blister-pack',
	},
	form: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.form',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'powder | tablets | capsule +',
	},
	ingredient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.ingredient.itemReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'The product contained',
	},
	'ingredient-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.ingredient.itemCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient-code',
		description: 'The product contained',
	},
	manufacturer: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.manufacturer',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Manufacturer of the item',
	},
	'over-the-counter': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.isOverTheCounter',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-over-the-counter',
		description: 'True if medication does not require a prescription',
	},
	'package-item': {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'Medication.package.content.itemReference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item',
		description: 'The item in the package',
	},
	'package-item-code': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.package.content.itemCodeableConcept',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item-code',
		description: 'The item in the package',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Medication.status',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-status',
		description: 'active | inactive | entered-in-error',
	},
};
