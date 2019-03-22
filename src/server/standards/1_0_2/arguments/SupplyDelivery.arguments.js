/**
 * @name exports
 * @static
 * @summary Arguments for the supplydelivery query
 */
module.exports = {
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SupplyDelivery.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-identifier',
		description: 'External identifier',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-patient',
		description: 'Patient for whom the item is supplied',
	},
	receiver: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.receiver',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-receiver',
		description: 'Who collected the Supply',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SupplyDelivery.status',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-status',
		description: 'in-progress | completed | abandoned',
	},
	supplier: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyDelivery.supplier',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyDelivery-supplier',
		description: 'Dispenser',
	},
};
