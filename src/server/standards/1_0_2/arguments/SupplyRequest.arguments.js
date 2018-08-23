module.exports = {
	DATE: {
		name: 'Date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-date',
		description: 'When the request was made.',
	},
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-identifier',
		description: 'Unique identifier.',
	},
	KIND: {
		name: 'Kind',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-kind',
		description: 'The kind of supply (central, non-stock, etc.).',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-patient',
		description: 'Patient for whom the item is supplied.',
	},
	SOURCE: {
		name: 'Source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-source',
		description: 'Who initiated this order.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-status',
		description: 'requested | completed | failed | cancelled.',
	},
	SUPPLIER: {
		name: 'Supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier',
		description: 'Who is intended to fulfill the request.',
	},
};
