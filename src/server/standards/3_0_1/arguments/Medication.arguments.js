module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/medications-code',
		documentation:
			'Multiple Resources:     * [Medication](medication.html): Codes that identify this medication  * [MedicationRequest](medicationrequest.html): Return prescriptions of this medication code  * [MedicationAdministration](medicationadministration.html): Return administrations of this medication code  * [MedicationStatement](medicationstatement.html): Return statements of this medication code  * [MedicationDispense](medicationdispense.html): Return dispenses of this medicine code  .',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		documentation: 'E.g. box, vial, blister-pack.',
	},
	FORM: {
		name: 'form',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		documentation: 'powder | tablets | capsule +.',
	},
	INGREDIENT: {
		name: 'ingredient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		documentation: 'The product contained.',
	},
	INGREDIENT_CODE: {
		name: 'ingredient-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient-code',
		documentation: 'The product contained.',
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		documentation: 'Manufacturer of the item.',
	},
	OVER_THE_COUNTER: {
		name: 'over-the-counter',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-over-the-counter',
		documentation: 'True if medication does not require a prescription.',
	},
	PACKAGE_ITEM: {
		name: 'package-item',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item',
		documentation: 'The item in the package.',
	},
	PACKAGE_ITEM_CODE: {
		name: 'package-item-code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-package-item-code',
		documentation: 'The item in the package.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-status',
		documentation: 'active | inactive | entered-in-error.',
	},
};
