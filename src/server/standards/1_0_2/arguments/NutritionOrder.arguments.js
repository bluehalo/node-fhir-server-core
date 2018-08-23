module.exports = {
	ADDITIVE: {
		name: 'Additive',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-additive',
		description: 'Type of module component to add to the feeding.',
	},
	DATETIME: {
		name: 'Datetime',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-datetime',
		description: 'Return nutrition orders requested on this date.',
	},
	ENCOUNTER: {
		name: 'Encounter',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-encounter',
		description: 'Return nutrition orders with this encounter identifier.',
	},
	FORMULA: {
		name: 'Formula',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-formula',
		description: 'Type of enteral or infant formula.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-identifier',
		description: 'Return nutrition orders with this external identifier.',
	},
	ORALDIET: {
		name: 'Oraldiet',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-oraldiet',
		description: 'Type of diet that can be consumed orally (i.e., take via the mouth).',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-patient',
		description: 'The identity of the person who requires the diet, formula or nutritional supplement.',
	},
	PROVIDER: {
		name: 'Provider',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-provider',
		description: 'The identify of the provider who placed the nutrition order.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-status',
		description: 'Status of the nutrition order.',
	},
	SUPPLEMENT: {
		name: 'Supplement',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/NutritionOrder-supplement',
		description: 'Type of supplement product requested.',
	},
};
