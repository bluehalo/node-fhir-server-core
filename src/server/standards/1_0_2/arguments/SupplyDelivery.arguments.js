module.exports = {
	IDENTIFIER: {
		name: 'Identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-identifier',
		description: 'External identifier.',
	},
	PATIENT: {
		name: 'Patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-patient',
		description: 'Patient for whom the item is supplied.',
	},
	RECEIVER: {
		name: 'Receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver',
		description: 'Who collected the Supply.',
	},
	STATUS: {
		name: 'Status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-status',
		description: 'in-progress | completed | abandoned.',
	},
	SUPPLIER: {
		name: 'Supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier',
		description: 'Dispenser.',
	},
};
