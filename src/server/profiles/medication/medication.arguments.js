/**
 * @name exports
 * @description All the possible arguments defined in one place
 */
module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'Codes that identify this medication'
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'E.g. box, vial, blister-pack'
	},
	FORM: {
		name: 'form',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'powder | tablets | capsule +'
	},
	INGREDIENT: {
		name: 'ingredient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'The product contained'
	},
	INGREDIENT_CODE: {
		name: 'ingredient-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'The product contained'
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'Manufacturer of the item'
	},
	OVER_THE_COUNTER: {
		name: 'over-the-counter',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'True if medication does not require a prescription'
	},
	PACKAGE_ITEM: {
		name: 'package-item',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'The item in the package'
	},
	PACKAGE_ITEM_CODE: {
		name: 'package-item-code',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'The item in the package'
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#medication',
		documentation: 'active | inactive | entered-in-error'
	}
};
