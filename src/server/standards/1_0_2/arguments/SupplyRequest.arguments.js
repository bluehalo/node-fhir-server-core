module.exports = {
	DATE: {
		name: 'date',
		type: 'date',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-date',
		documentation: 'When the request was made.',
	},
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-identifier',
		documentation: 'Unique identifier.',
	},
	KIND: {
		name: 'kind',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-kind',
		documentation: 'The kind of supply (central, non-stock, etc.).',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-patient',
		documentation: 'Patient for whom the item is supplied.',
	},
	SOURCE: {
		name: 'source',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-source',
		documentation: 'Who initiated this order.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-status',
		documentation: 'requested | completed | failed | cancelled.',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier',
		documentation: 'Who is intended to fulfill the request.',
	},
};
