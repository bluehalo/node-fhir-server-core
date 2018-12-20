module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-identifier',
		documentation: 'External identifier.',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-patient',
		documentation: 'Patient for whom the item is supplied.',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver',
		documentation: 'Who collected the Supply.',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-status',
		documentation: 'in-progress | completed | abandoned.',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier',
		documentation: 'Dispenser.',
	},
};
