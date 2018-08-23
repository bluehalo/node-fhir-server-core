module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-code',
		description: 'Codes that identify this medication.',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		description: 'E.g. box, vial, blister-pack.',
	},
	CONTENT: {
		name: 'content',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-content',
		description: 'A product in the package.',
	},
	FORM: {
		name: 'form',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		description: 'powder | tablets | carton +.',
	},
	INGREDIENT: {
		name: 'ingredient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		description: 'The product contained.',
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		description: 'Manufacturer of the item.',
	},
};
