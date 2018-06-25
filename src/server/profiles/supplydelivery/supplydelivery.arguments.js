/**
 * @name exports
 * @description All the possible arguments defined in one place
 */

module.exports = {
	IDENTIFIER: {
		name: 'identifier',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplydelivery',
		documentation: 'External identifier',
	},
	PATIENT: {
		name: 'patient',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplydelivery',
		documentation: 'Patient for whom the item is supplied',
	},
	RECEIVER: {
		name: 'receiver',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplydelivery',
		documentation: 'Who collected the Supply',
	},
	STATUS: {
		name: 'status',
		type: 'token',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplydelivery',
		documentation: 'in-progress | completed | abandoned | entered-in-error',
	},
	SUPPLIER: {
		name: 'supplier',
		type: 'reference',
		definition: 'https://www.hl7.org/fhir/searchparameter-registry.html#supplydelivery',
		documentation: 'Dispenser',
	},
};
