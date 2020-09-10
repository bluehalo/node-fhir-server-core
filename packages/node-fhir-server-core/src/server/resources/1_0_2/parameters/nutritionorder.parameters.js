/**
 * @name exports
 * @static
 * @summary Arguments for the nutritionorder query
 */
module.exports = {
	additive: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.enteralFormula.additiveType',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-additive',
		description: 'Type of module component to add to the feeding',
	},
	datetime: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'NutritionOrder.dateTime',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime',
		description: 'Return nutrition orders requested on this date',
	},
	encounter: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'NutritionOrder.encounter',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-encounter',
		description: 'Return nutrition orders with this encounter identifier',
	},
	formula: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.enteralFormula.baseFormulaType',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-formula',
		description: 'Type of enteral or infant formula',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-identifier',
		description: 'Return nutrition orders with this external identifier',
	},
	oraldiet: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.oralDiet.type',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet',
		description: 'Type of diet that can be consumed orally (i.e., take via the mouth).',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'NutritionOrder.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-patient',
		description: 'The identity of the person who requires the diet, formula or nutritional supplement',
	},
	provider: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'NutritionOrder.orderer',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-provider',
		description: 'The identify of the provider who placed the nutrition order',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.status',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-status',
		description: 'Status of the nutrition order.',
	},
	supplement: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'NutritionOrder.supplement.type',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement',
		description: 'Type of supplement product requested',
	},
};
