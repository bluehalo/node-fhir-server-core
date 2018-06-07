/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	ADDITIVE: {
		name: 'additive',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Type of module component to add to the feeding',
	},
	DATETIME: {
		name: 'datetime',
		type: 'date',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Return nutrition orders requested on this date',
	},
	ENCOUNTER: {
		name: 'encounter',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Return nutrition orders with this encounter identifier',
	},
	FORMULA: {
		name: 'formula',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Type of enteral or infant formula',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Return nutrition orders with this external identifier',
	},
	ORALDIET: {
		name: 'oraldiet',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Type of diet that can be consumed orally (i.e., take via the mouth).',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'The identity of the person who requires the diet, formula or nutritional supplement',
	},
	PROVIDER: {
		name: 'provider',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'The identify of the provider who placed the nutrition order',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Status of the nutrition order.',
	},
	SUPPLEMENT: {
		name: 'supplement',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#nutritionorder',
		documentation: 'Type of supplement product requested',
	},
};
