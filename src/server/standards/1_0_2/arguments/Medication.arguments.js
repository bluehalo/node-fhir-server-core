module.exports = {
	CODE: {
		name: 'code',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-code',
		documentation: 'Codes that identify this medication.',
	},
	CONTAINER: {
		name: 'container',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-container',
		documentation: 'E.g. box, vial, blister-pack.',
	},
	CONTENT: {
		name: 'content',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-content',
		documentation: 'A product in the package.',
	},
	FORM: {
		name: 'form',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-form',
		documentation: 'powder | tablets | carton +.',
	},
	INGREDIENT: {
		name: 'ingredient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-ingredient',
		documentation: 'The product contained.',
	},
	MANUFACTURER: {
		name: 'manufacturer',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/Medication-manufacturer',
		documentation: 'Manufacturer of the item.',
	},
};
