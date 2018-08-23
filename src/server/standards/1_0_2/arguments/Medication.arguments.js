module.exports = {
	CODE: {
		name: 'Code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-code',
		description: 'Codes that identify this medication.',
	},
	CONTAINER: {
		name: 'Container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		description: 'E.g. box, vial, blister-pack.',
	},
	CONTENT: {
		name: 'Content',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-content',
		description: 'A product in the package.',
	},
	FORM: {
		name: 'Form',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'powder | tablets | carton +.',
	},
	INGREDIENT: {
		name: 'Ingredient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'The product contained.',
	},
	MANUFACTURER: {
		name: 'Manufacturer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Manufacturer of the item.',
	},
};
