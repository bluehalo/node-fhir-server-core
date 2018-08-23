module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-identifier',
		description: 'External identifier.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-patient',
		description: 'Patient for whom the item is supplied.',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver',
		description: 'Who collected the Supply.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-status',
		description: 'in-progress | completed | abandoned.',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier',
		description: 'Dispenser.',
	},
};
