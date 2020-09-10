/**
 * @name exports
 * @static
 * @summary Arguments for the supplyrequest query
 */
module.exports = {
	date: {
		type: 'date',
		fhirtype: 'date',
		xpath: 'SupplyRequest.date',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-date',
		description: 'When the request was made',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SupplyRequest.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-identifier',
		description: 'Unique identifier',
	},
	kind: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SupplyRequest.kind',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-kind',
		description: 'The kind of supply (central, non-stock, etc.)',
	},
	patient: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyRequest.patient',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-patient',
		description: 'Patient for whom the item is supplied',
	},
	source: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyRequest.source',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-source',
		description: 'Who initiated this order',
	},
	status: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'SupplyRequest.status',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-status',
		description: 'requested | completed | failed | cancelled',
	},
	supplier: {
		type: 'reference',
		fhirtype: 'reference',
		xpath: 'SupplyRequest.supplier',
		definition: 'http://hl7.org/fhir/SearchParameter/SupplyRequest-supplier',
		description: 'Who is intended to fulfill the request',
	},
};
